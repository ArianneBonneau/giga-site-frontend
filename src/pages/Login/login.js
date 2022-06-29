import React,{useState, useEffect} from 'react'

//styled components
import {StyledTextInput, StyledLoginArea, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyRightText} from './../../components/Styles';

//Logo
import Logo from './../../favicon.png';

//formik
import {Formik, Form} from 'formik';
import {TextInput} from "./../../components/FormLib";

//icons
import {FiMail, FiLock} from 'react-icons/fi';

import {useNavigate} from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (user) => {
        fetch("http://localhost:3000/api/users/login", {
            mode: 'cors',
            method: "POST",
            headers: {
                'Content-type': "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
        .then((res) => {
            if(res.ok){
                navigate("/");
                console.log(res);
            } else if (!res.ok){
                alert("Il n'y a pas de compte pour ce courriel, ou le mot de passe n'est pas le bon.");
                console.log(res);
            }
           
        })
        
        .then(console.log(user))
        .catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }

    const retrieveUser = (e) => {
        e.preventDefault();
        const user = {
            "email": email,
            "password": password
        }
        if (!email || !password){
            alert("Vous devez remplir tous les champs!")
        } else {
            login(user)
        }
    }

    return (
       <div>
        <StyledLoginArea>
            <Avatar image={Logo}/>
            <StyledTitle color="#1e519b" size={30}>
                Connexion
            </StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: ""                
                }}>
                {({isSubmitting}) => (
                    <Form onSubmit={retrieveUser}>
                        <TextInput 
                        name="email"
                        type="text"
                        label="Courriel"
                        placeholder="olga@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        icon={<FiMail/>}
                        />
                        <TextInput style={{marginRight: "-10"}}
                        name="password"
                        type="password"
                        label="Mot de passe"
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        icon={<FiLock/>}
                        />
                        <ButtonGroup>
                        <StyledFormButton type="submit">
                            Connexion
                        </StyledFormButton>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                Vous n'avez pas de compte? <TextLink to="/register">Inscription</TextLink>
            </ExtraText>
        </StyledLoginArea>
        <CopyRightText>
            Tous droits réservés &copy;2022
        </CopyRightText>
       </div>
    )
}

export default Login;