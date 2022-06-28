import React,{useState} from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//styled components
import {StyledFormArea, StyledFormButton, StyledLabel, StyledLabel2, Avatar, StyledTitle, ButtonGroup, ExtraText, TextLink, CopyRightText} from './../../components/Styles';

//Logo
import Logo from './../../favicon.png';

//formik
import {Formik, Form} from 'formik';
import {TextInput} from "./../../components/FormLib";

//icons
import {FiMail, FiLock, FiUser, FiPhone, } from 'react-icons/fi';

import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [fnameIn, setFnameIn] = useState('');
    const [lnameIn, setLnameIn] = useState('');
    const [emailIn, setEmailIn] = useState('');
    const [typeIn, setTypeIn] = useState('');
    const [passwordIn, setPasswordIn] = useState('');
    const [passwordConfirmationIn, setPasswordConfirmationIn] = useState('');
    const [phoneIn, setPhoneIn] = useState('');

    const [isCheckedE, setIsCheckedE] = useState(false);
    const [isCheckedF, setIsCheckedF] = useState(false);

//handle when user clicks on Entrepreneur checkbox
    const handleOnChangeE = () => {
        //if fournisseur is already checked
        if(isCheckedF){
            //uncheck fournisseur
            setIsCheckedF(!isCheckedF);
            //check entrepreneur
            setIsCheckedE(!isCheckedE);
            //set type to entrepreneur
            setTypeIn("Entrepreneur");
        //if entrepreneur is already checked
        } else if (isCheckedE){
            //uncheck entrepreneur
            setIsCheckedE(!isCheckedE);
            //set type to null
            setTypeIn("");
        //else (if none is checked)
        } else {
            //check entrepreneur
            setIsCheckedE(!isCheckedE);
            //set type to entrepreneur
            setTypeIn("Entrepreneur");
        }
    };

//handle when user clicks on Fournisseur checkbox
    const handleOnChangeF = () => {
        //if entrepreneur is already checked
        if(isCheckedE){
            //uncheck entrepreneur
            setIsCheckedE(!isCheckedE);
            //check fournisseur
            setIsCheckedF(!isCheckedF);
            //set type to fournisseur
            setTypeIn("Fournisseur");
        //if fournisseur is already checked
        } else if (isCheckedF){
            //uncheck fournisseur
            setIsCheckedF(!isCheckedF);
             //set type to null
            setTypeIn("");
        //else (if none is checked)
        } else {
            //check fournisseur
            setIsCheckedF(!isCheckedF);
            //set type to fournisseur
            setTypeIn("Fournisseur");
        }
      };

//when there is no error in the form, we call this function
const saveUser = (userInfo) => {
    //post request to add user to db
        fetch("http://localhost:3000/api/users", {
            mode: 'cors',
            method: "POST",
            headers: {
                'Content-type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({userInfo})
        })
        .then((res) => {
            //if request response is ok
            if(res.ok){
                //redirect to login page
                navigate("/login");
                console.log(res);
            //if request response is not ok
            } else if (!res.ok) {
                //redirect to register page
                alert("Une erreur s'est produite lors de la création de votre compte, veuillez réessayer.");
                console.log(res);
                navigate("/register");
            }
        })
        .then(console.log(userInfo))
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }

    const verifyIfUserExist = (emailIn) => {
        const userInfo = {
            fnameIn, lnameIn, emailIn, typeIn,  passwordIn, passwordConfirmationIn, phoneIn
        }
    
        fetch(`http://localhost:3000/api/users/${emailIn}`)
        .then(console.log(emailIn))
        .then((res) => {
            if(res.ok){
                console.log(res);
                alert("Un utilisateur existe déjà pour ce courriel.");
            } else if(!res.ok) {
                saveUser(userInfo);
                console.log(res);
            }
        })
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }

//we call this function when the user clicks on the button to submit the registration
const CreateUser = (e) => {
    e.preventDefault();
    var val = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
    var str = /^[a-zA-Z ,.'-]+$/
    var validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    //if none of the checkboxes are checked
    if(!isCheckedE && !isCheckedF){
        console.log(typeIn);
        alert("Vous devez sélectionner un type de compte.");
    //if one of the field is empty
    } else if (!fnameIn || !lnameIn || !emailIn || !typeIn || !passwordIn || !passwordConfirmationIn || !phoneIn){
        alert("Tous les champs doivent être remplis!");
    //if name is not a string
    } else if (!fnameIn.match(str) || !lnameIn.match(str)){
        alert("Le nom ne doit pas contenir de chiffre ou de symbol.");
    //if email is invalid
    } else if (!emailIn.match(validEmail)) {
        alert("L'adresse courriel est invalide.");
    //if phone is invalid
    } else if (!phoneIn.match('[0-9]{10}')) {
        alert("Le téléphone est invalide.");
    //if password does not contain 1 capital letter, one lower case letter and one symbol
    } else if (!passwordIn.match(val)){
        alert("Le mot de passe doit contenir au moins 8 charactères dont une lettre minuscule, une lettre majuscule et un charactère spécial.");
    //if password does not match password confirmation
    } else if (passwordIn !== passwordConfirmationIn) {
        alert("Le mot de passe et la confirmation du mot de passe doivent être identiques.");
    //if everything is fine
    } else {
        verifyIfUserExist(emailIn);
        // const userInfo = {
        //     fnameIn, lnameIn, emailIn, typeIn,  passwordIn, passwordConfirmationIn, phoneIn
        // }
        // //call function to verify if user in db
        // saveUser(userInfo);
    }
   
}

    return (
       <div>
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle color="#1e519b" size={30}>
                INSCRIPTION
            </StyledTitle>
            <Formik
                initialValues={{
                    fname:"",
                    lname: "",
                    email:"",
                    type: "",
                    password: "",
                    passwordConfirmation: "",
                    address: "",
                    office: "",
                    country: "",
                    province: "",
                    city: "",
                    postalcode: "",
                    phone: ""                
                }}
                >
                {({isSubmitting}) => (
                    <Form onSubmit={CreateUser}>
                    <div className="row">
                        <StyledLabel className='required'>TYPE DE COMPTE</StyledLabel>

                        <div className="col-6" style={{alignContent: "center"}}>

                        <div className="cbx">
                        <StyledLabel2 style={{marginLeft: "50px"}}>
                            <input id="cbx"
                             name="type"
                             type="checkbox"
                             label="Entrepreneur"
                             checked={isCheckedE}
                             onChange={handleOnChangeE}  
                             value="Entrepreneur" />
                            <label htmlFor="cbx"></label>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        Entrepreneur</StyledLabel2> 
                        </div>
                            <svg style={{width: "20px", height: "50px"}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                <fegaussianblur in="SourceGraphic" stdDeviation="4" result="blur"></fegaussianblur>
                                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></fecolormatrix>
                                <feblend in="SourceGraphic" in2="goo"></feblend>
                                </filter>
                            </defs>
                            </svg>
                                        
                        <TextInput 
                        name="fname"
                        className='required'
                        type="text"
                        label="PRÉNOM"
                        placeholder="Olga"
                        onChange={(e) => setFnameIn(e.target.value)}
                        value={fnameIn}
                        icon={<FiUser/>}
                        />
                        <TextInput 
                        name="email"
                        className='required'
                        type="text"
                        label="COURRIEL"
                        placeholder="olga@example.com"
                        onChange={(e) => setEmailIn(e.target.value)}
                        value={emailIn}
                        icon={<FiMail/>}
                        />

                        <TextInput 
                        name="password"
                        className='required'
                        type="password"
                        label="MOT DE PASSE"
                        placeholder="********"
                        onChange={(e) => setPasswordIn(e.target.value)}
                        value={passwordIn}
                        icon={<FiLock/>}
                        />
                        
                        </div>
                        <div className="col-6">
                        <div className="cbx">
                            <StyledLabel2 style={{marginLeft: "50px"}}>

                                <input id="cbx"
                                name="type"
                                type="checkbox"
                                label="Fournisseur"
                                checked={isCheckedF}
                                onChange={handleOnChangeF}  
                                value="Fournisseur" 
                                /> 
                           <label htmlFor="cbx"></label>
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                            Fournisseur</StyledLabel2>
                            </div>
                            <svg style={{width: "20px", height: "50px"}} xmlns="http://www.w3.org/2000/svg" version="1.1" className=''>
                            <defs>
                                <filter id="goo">
                                <fegaussianblur in="SourceGraphic" stdDeviation="4" result="blur"></fegaussianblur>
                                <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo"></fecolormatrix>
                                <feblend in="SourceGraphic" in2="goo"></feblend>
                                </filter>
                            </defs>
                            </svg>


                        <TextInput 
                        name="lname"
                        className='required'
                        type="text"
                        label="NOM DE FAMILLE"
                        placeholder="Simpson"
                        onChange={(e) => setLnameIn(e.target.value)}
                        value={lnameIn}
                        icon={<FiUser/>}
                        />
                        <TextInput 
                        name="phone"
                        className='required'
                        type="text"
                        label="TÉLÉPHONE"
                        placeholder="5142345617"
                        onChange={(e) => setPhoneIn(e.target.value)}
                        value={phoneIn}
                        icon={<FiPhone/>}
                        />
                        <TextInput 
                        name="passwordConfirmation"
                        className='required'
                        type="password"
                        label="CONFIRMATION DU MOT DE PASSE"
                        placeholder="********"
                        onChange={(e) => setPasswordConfirmationIn(e.target.value)}
                        value={passwordConfirmationIn}
                        icon={<FiLock/>}
                        />
                        </div>
                    </div>
                        <ButtonGroup>
                            {!isSubmitting && <StyledFormButton type="submit">
                               Créer le compte
                            </StyledFormButton>}

                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                Vous avez déjà un compte? <TextLink to="/login">Connexion</TextLink>
            </ExtraText>
        </StyledFormArea>
        <CopyRightText>
            Tous droits réservés &copy;2022
        </CopyRightText>
       </div>
    )
}


export default Register;