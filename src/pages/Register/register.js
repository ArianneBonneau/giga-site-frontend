import React,{useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
//styled components
import {StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyRightText} from './../../components/Styles';

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
        .then(console.log(userInfo))
        .then((res) => {
            //if request response is ok
            if(res.ok){
                console.log(res);
                //redirect to login page
                navigate("/login");
            //if request response is not ok
            } else {
                console.log(res);
                //redirect to register page
                alert("Une erreur s'est produite lors de la création de votre compte, veuillez réessayer.");
                navigate("/register");
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
    //if none of the checkboxes are checked
    if(!isCheckedE && !isCheckedF){
        console.log(typeIn);
        alert("Vous devez sélectionner un type de compte.");
    //if one of the field is empty
    } else if (!fnameIn || !lnameIn || !emailIn || !typeIn || !passwordIn || !passwordConfirmationIn || !phoneIn){
        alert("Tous les champs doivent être remplis!");
     } //else if (fnameIn){
    //     alert("Le mot de passe doit contenir au moins 8 charactères dont une lettre minuscule, une lettre majuscule et un charactère spécial.")
    // } 
    //if password does not contain 1 capital letter, one lower case letter and one symbol
    else if (!passwordIn.match(val)){
        alert("Le mot de passe doit contenir au moins 8 charactères dont une lettre minuscule, une lettre majuscule et un charactère spécial.")
    //if password does not match password confirmation
    } else if (passwordIn != passwordConfirmationIn) {
        alert("Le mot de passe et la confirmation du mot de passe doivent être identiques.")
    //if everything is fine
    } else {
        const userInfo = {
            fnameIn, lnameIn, emailIn, typeIn,  passwordIn, passwordConfirmationIn, phoneIn
        }
        //call function to save user in db
        saveUser(userInfo);
    }
   
}

    return (
       <div>
        <StyledFormArea>
            <Avatar image={Logo}/>
            <StyledTitle color={colors.theme} size={30}>
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
                // userValidationSchema = {
                //     Yup.object({
                //         email: Yup.string().email("Invalid email address").required("Required"),
                //         password: Yup.string().min(8, "Password is too short").max(15, "Password is too long").required("Required"),
                //         fname: Yup.string().required("Required"),
                //         lname: Yup.string().required("Required"),
                //         type: Yup.string().required("Required"),
                //         // address: Yup.string().required("Required"),
                //         // office: Yup.string().required("Required"),
                //         // country: Yup.string().required("Required"),
                //         // province: Yup.string().required("Required"),
                //         // city: Yup.string().required("Required"),
                //         // postalcode: Yup.string().required("Required"),
                //         phone: Yup.string().required("Required"),
                //         passwordConfirmation: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")
                //     })
                // } 
                >
                {({isSubmitting}) => (
                    <Form onSubmit={CreateUser}>
                    <div className="row">
                        <StyledLabel>TYPE DE COMPTE</StyledLabel>

                        <div className="col-6">

                        <StyledLabel>
                        <input
                        name="type"
                        type="checkbox"
                        label="Entrepreneur"
                        checked={isCheckedE}
                        onChange={handleOnChangeE}  
                        value="Entrepreneur" 
                        /> Entrepreneur</StyledLabel>                        

                        <TextInput 
                        name="fname"
                        type="text"
                        label="PRÉNOM"
                        placeholder="Olga"
                        onChange={(e) => setFnameIn(e.target.value)}
                        value={fnameIn}
                        icon={<FiUser/>}
                        />
                        <TextInput 
                        name="email"
                        type="text"
                        label="COURRIEL"
                        placeholder="olga@example.com"
                        onChange={(e) => setEmailIn(e.target.value)}
                        value={emailIn}
                        icon={<FiMail/>}
                        />
                        {/* <TextInput 
                        name="type"
                        type="text"
                        label="Type of user"
                        onChange={(e) => setTypeIn(e.target.value)}
                        value={typeIn}
                        icon={<FiUser/>}
                        /> */}

                        <TextInput 
                        name="password"
                        type="password"
                        label="MOT DE PASSE"
                        placeholder="********"
                        onChange={(e) => setPasswordIn(e.target.value)}
                        value={passwordIn}
                        icon={<FiLock/>}
                        />
                        
                        </div>
                        <div className="col-6">
                        <StyledLabel>
                            <input
                        name="type"
                        type="checkbox"
                        label="Fournisseur"
                        checked={isCheckedF}
                        onChange={handleOnChangeF}  
                        value="Fournisseur" 
                        /> Fournisseur</StyledLabel>

                        <TextInput 
                        name="lname"
                        type="text"
                        label="NOM DE FAMILLE"
                        placeholder="Simpson"
                        onChange={(e) => setLnameIn(e.target.value)}
                        value={lnameIn}
                        icon={<FiUser/>}
                        />
                        <TextInput 
                        name="phone"
                        type="text"
                        label="TÉLÉPHONE"
                        placeholder="514-111-1111"
                        onChange={(e) => setPhoneIn(e.target.value)}
                        value={phoneIn}
                        icon={<FiPhone/>}
                        />
                        <TextInput 
                        name="passwordConfirmation"
                        type="password"
                        label="CONFIRMATION DU MOT DE PASSE"
                        placeholder="********"
                        onChange={(e) => setPasswordConfirmationIn(e.target.value)}
                        value={passwordConfirmationIn}
                        icon={<FiLock/>}
                        />
                        {/* <TextInput 
                        name="address"
                        type="text"
                        label="Address"
                        onChange={(e) => setAddressIn(e.target.value)}
                        value={addressIn}
                        icon={<FiMapPin/>}
                        />
                         <TextInput 
                        name="office"
                        type="text"
                        label="Office number"
                        onChange={(e) => setOfficeIn(e.target.value)}
                        value={officeIn}
                        icon={<FiMap/>}
                        />
                         <TextInput 
                        name="country"
                        type="text"
                        label="Country"
                        onChange={(e) => setCountryIn(e.target.value)}
                        value={countryIn}
                        icon={<FiMap/>}
                        />
                         <TextInput 
                        name="province"
                        type="text"
                        label="Province"
                        onChange={(e) => setProvinceIn(e.target.value)}
                        value={provinceIn}
                        icon={<FiMap/>}
                        />
                         <TextInput 
                        name="city"
                        type="text"
                        label="City"
                        onChange={(e) => setCityIn(e.target.value)}
                        value={cityIn}
                        icon={<FiMap/>}
                        />
                         <TextInput 
                        name="postalcode"
                        type="text"
                        label="Postal code"
                        value={postalcodeIn}
                        onChange={(e) => setPostalcodeIn(e.target.value)}
                        icon={<FiMapPin/>}
                        /> */}
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