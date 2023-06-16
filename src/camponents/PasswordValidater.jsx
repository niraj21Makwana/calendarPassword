import React, { useState } from 'react';

const PasswordValidater = () => {

    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage] = useState('');

    const handlePassword = (event) =>{
        let new_password = event.target.value;
        setPassword(new_password);

        let lowerCase = /[a-z]/g;
        let upperCase = /[A-Z]/g;
        let numbers = /[0-9]/g;
        let specialCha = /[$&+,:;=?@#|'<>.-^*()%!]/g;

        if(!new_password.match(lowerCase)){
            setErrorMessage("Password should contains lowerCase letters!");
        }else if(!new_password.match(upperCase)){
            setErrorMessage("Password should contains Uppercase letters!");
        }else if (!new_password.match(numbers)) {
            setErrorMessage("Password should contains numbers also!");
         }else if (!new_password.match(specialCha)) {
            setErrorMessage("Password should contains special charter");
         }else if (new_password.length < 6) {
            setErrorMessage("Password length should be more than 6.");
         }else {
            setErrorMessage("Password is strong!"); 
         }
    }

    return (  
        <>
            <form>
                <label>Password </label>
                <input type ="password" value={password} onChange = {handlePassword}/>
              <div style = {{ color: "red" }}> {errorMessage} </div>
            </form>
        </>
    );
}
 
export default PasswordValidater;