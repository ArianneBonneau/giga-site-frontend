import React,{useState, useEffect} from 'react'

//styled components
import {StyledTextInput, StyledLoginArea, StyledFormArea, StyledFormButton, StyledLabel, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyRightText} from './../../components/Styles';

//Logo
import Logo from './../../favicon.png';

//formik
import {Formik, Form} from 'formik';
import {TextInput} from "./../../components/FormLib";
import * as Yup from 'yup';

//icons
import {FiMail, FiLock} from 'react-icons/fi';

//loader
import * as Loader from 'react-loader-spinner';

//auth & redux
import {connect} from 'react-redux';
import {useNavigate} from "react-router-dom";

const Login = () => {
    
    const history = useNavigate()
    //const [user, setUser] = useState([]);
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
        .then(res => console.log(res))
        .then(console.log(user))
        //.then(json => setUser(js))
        //.then(data => console.log(data))
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
        login(user)
        // fetch("http://localhost:3000/api/users/login")
        // .then(console.log(email))
        // .then(res => console.log(res))
        // .then((data) => setUser(data))
        // .catch(err => {
        //     console.log("Error Reading data " + err);
        //   });
        //   console.log(password);
        //   console.log(user);

        //   if ( user.password === password){
        //     console.log("users exists");
        // } else {
        //     console.log(user.data);
        // }
    }

    return (
       <div>
        <StyledLoginArea>
            <Avatar image={Logo}/>
            <StyledTitle color="#1e519b" size={30}>
                Member Login
            </StyledTitle>
            <Formik
                initialValues={{
                    email: "",
                    password: ""                
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email address").required("Required"),
                        password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                    })
                }>
                {({isSubmitting}) => (
                    <Form onSubmit={retrieveUser}>
                        <TextInput 
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="olga@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        icon={<FiMail/>}
                        />
                        <TextInput style={{marginRight: "-10"}}
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        icon={<FiLock/>}
                        />
                        <ButtonGroup>
                        <StyledFormButton type="submit">
                            Login
                        </StyledFormButton>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
            <ExtraText>
                New here? <TextLink to="/register">Register</TextLink>
            </ExtraText>
        </StyledLoginArea>
        <CopyRightText>
            All rights reserved &copy;2022
        </CopyRightText>
       </div>
    )
}

export default Login;