<?php

namespace App\Http\Controllers\API;

use App\Models\Commentaire;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CommantaireController extends Controller
{
    public function index() {

        $commentaires = Commentaire::with('user')->orderBy('id','DESC')->get();

        return response()->json([
            'status' => 200,
            'commentaires' => $commentaires
        ]);
    }

    public function store(Request $request) {

        $validate = Validator::make($request->all(), [
            'evaluation' => 'required',
            'message' => 'required|string',
            'user' => 'required',
            'livre' => 'required',
        ]);

        if($validate->fails()) {

            return response()->json([
                'errors' => $validate->messages(),
                'message' => "Veillez renseigner tout les champs"
            ]);
        } else {

            $commentaireCreer= Commentaire::create([
                'message' => $request->message,
                'evaluation' => $request->evaluation,
                "user_id" => $request->user,
                "livre_id" => $request->livre
            ]);

            $commentaire = Commentaire::where('id','=', $commentaireCreer['id'])->with('user')->get();


            return response()->json([
                "status" => 200,
                'message' => "Commmentaire créée avec succes",
                'commentaire' => $commentaire
            ]);
        }
    }
}
