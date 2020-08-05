import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Kianeflix logo" />
      </Link>
      <div>
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova categoria
        </Button>
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
