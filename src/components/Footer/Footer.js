import React from "react";
import { StyledLoginArea } from "../Styles";
import Logo from './../../logogigasite.png';
import {FiSend} from 'react-icons/fi';


export default function Footer() {
    return (

       <footer style={{padding: "0"}}>
        <div className="row py-5" style={{padding: "0"}}>
            <div className="col-6" style={{marginLeft: "60px", width: "45%"}}>
                <h2 className="footer-heading"><img src={Logo} alt="Logo giga-site" height="17"/></h2>
                <div className="row">
                    <div className="col-6">
                    <ul style={{marginTop: "10px"}}>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>Accueuil</li>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>À propos</li>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>Fonctionnement</li>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>Produits</li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <ul style={{marginTop: "10px"}}>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>Créer un compte</li>
                        <li style={{listStyleType: "none", fontSize: "13px"}}>Se connecter</li>
                    </ul>
                    </div>
                </div>
                <p style={{fontSize: "10px", left: "0", bottom: "0", marginTop: "67px", marginLeft: "-10px"}}>Tous droits réservés &copy;2022 Giga-Site | Arianne Bonneau</p>
            </div>
            <div className="col-6" style={{margin: "5px", width: "45%"}}>
                    {/* <StyledLoginArea style={{ paddingTop: "20px", paddingBottom: "20px", textAlign: "center", display: "block"}}> */}
                    <h4 className="footer-heading" style={{color: "rgba(33, 118, 255, 1)", fontWeight: "bold", marginBottom: "10px"}}> Contactez nous</h4>
                    <form action="" target="">
                        <div className="row">
                            <div className="col-6">
                                <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Nom"
                                style={{fontSize: "12px", borderRadius: "0", marginBottom: "7px", alignItems: "center", width: "100%"}}
                                />
                                <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Sujet"
                                style={{fontSize: "12px", borderRadius: "0", marginBottom: "7px", alignItems: "center", width: "100%"}}
                                />
                                <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Courriel"
                                style={{fontSize: "12px", borderRadius: "0", marginBottom: "7px", alignItems: "center", width: "100%"}}
                                />
                            </div>
                            <div className="col-6">
                                <textarea
                                autoComplete="off"
                                className="form-control"
                                placeholder="Message"
                                style={{fontSize: "12px", borderRadius: "0", marginBottom: "10px", alignItems: "center", width: "100%", height: "110px"}}
                                />
                            </div>
                            </div>
                        <button type="submit" className="btn btn-primary me-3 button-class" 
                        style={{padding: "3px", borderRadius: "0", fontWeight: "bold", fontSize: "13px", width: "fit-content"}}>
                        <FiSend/> ENVOYER LE MESSAGE
                        </button>
                    </form>
                    {/* </StyledLoginArea> */}
            </div>
        </div>
        </footer>
    );
}