import React from "react";

import "./Nav.css";
import { ReactComponent as Assets_netflix_logo } from "../../assets/img/netflix_logo.svg";
import { ReactComponent as Assets_search_icon } from "../../assets/img/search_icon.svg";
import { ReactComponent as Assets_notification_icon } from "../../assets/img/notification_icon.svg";

export default function Nav(){
    return (
        <nav className="nav-container">
            <div className="nav-menu">
                <div className="nav-logo">
                    <Assets_netflix_logo  title="Netflix" />
                </div>
                <div className="nav-links">
                    <a href="#" className="active">Início</a>
                    <a href="#">Séries</a>
                    <a href="#">Filmes</a>
                    <a href="#">Bombando</a>
                    <a href="#">Minha Lista</a>
                    <a href="#">Navegar por Idiomas</a>
                </div>
            </div>
            <div className="nav-functions">
                <Assets_search_icon/>
                <a href="#">Infantil</a>
                <Assets_notification_icon/>
                <div className="nav-user-options">
                    <img className="nav-user-image" src="../../assets/img/user_01_image.png"/>
                    <div className="nav-user-dropdown"></div>
                </div>
            </div>
        </nav>
    );
}