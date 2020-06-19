import React from 'react';
import {Link} from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi';
import './styles.css';

import inicioImg from '../../assets/inicio1.png'
import logoImg from '../../assets/logo5.png'

export default function Logon() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>

                <form action="">
                    <h1>Login</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button"type="submit"> Entrar </button>

                    <Link to="/register"> 
                        <FiLogIn size={16} color="#3a44a2" /> 
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>

            <img src={inicioImg} alt="FindPlace"/>
        </div>
    );
    
}