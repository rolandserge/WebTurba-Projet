import React, { useState } from "react";
import { useAuth } from "../Hooks/auth";
import Home from "../Assets/home.png";
import Link from "next/link";
import Image from "next/image";
import PopProfile from "./PopProfile";

const Navbar = () => {
  
  const { user } = useAuth();

  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" className="logo">
          <h1>GesiLivre</h1>
        </Link>
      </div>
      <div className="lien">
        <Link href={"/"} className="home_div">
          <div className="image_div">
            <Image src={Home} alt='home illustration' className="image_home" />
          </div>
          <div>
            <p>Acceuil</p>
          </div>
        </Link>
        {
          user ? <>

            <div
              className="profil"
              onMouseEnter={() => setActive(true)}
            >
              <div className="image">
                <p>{ user.nom[0] }</p>
              </div>
              <div className="user_nom">
                <p>{user.prenom}</p>
              </div>
            </div>
          </> :
          <>
            <p className="contact">Nous contacter</p>
          </>
        }
      </div>
      {active && <PopProfile close={() => setActive(false)} />}
    </nav>
  );
};

export default Navbar;
