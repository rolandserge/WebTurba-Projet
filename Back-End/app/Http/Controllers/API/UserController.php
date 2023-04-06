<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Livre;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Commentaire;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request) {

        $validation = Validator::make($request->all(), [
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()) {

            return response()->json([
                'status' => 422,
                'errors' => $validation->messages(),
            ]);
        } else {

            $user = User::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            ]);

            $token = $user->createToken($request->email.'_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'token' => $token,
                'message' => 'Personnel créee avec success'
            ]);

        }
    }

    public function login(Request $request) {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if($validator->fails()) {

            return response()->json([
                'error' => $validator->messages(),
                'status' => 422
            ]);

        } else {

            if(Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

                $request->session()->regenerate();

                $token = Auth::user()->createToken($request->email.'_Token')->plainTextToken;

                // $cookie = cookie('laravel_auth', $token, 60 * 24);

                return response()->json([
                    'status' => 200,
                    'data' => Auth::user(),
                    'token' => $token,
                    'message' => 'connexion reussi avec succes'
                ]);

            } else  {

                return response()->json([
                    'message' => 'Vos identifiants sont incorrect',
                    'status' => 401
                ]);
            }
        }

    }

    public function user_info($id) {

        $mes_livres = Livre::where('user_id', '=', $id)->orderBy('id', 'DESC')->get();

        $comment_user = Commentaire::where('user_id', '=', $id)->orderBy('id', 'DESC')->get();

        return response()->json([
            'status' => 200,
            "livre_commenter" => $comment_user,
            "mes_livres" => $mes_livres
        ]);
    }

    public function me(Request $request) {

        $auth_user = $request->user();

        return response()->json([
            'status' => 200,
            "data" => $auth_user
        ]);
    }

    public function logout(Request $request) {

        auth()->user()->tokens()->delete();

        auth('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'status' => 200,
            'message' => 'deconnexion reussie'
        ]);
    }
}