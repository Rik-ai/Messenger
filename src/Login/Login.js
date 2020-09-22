import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import styled from './Login.module.css'

function Login() {
    const signIn =() =>{
        auth
        .signInWithPopup(provider)
        .then(result => console.log(result))
        .catch((error) => alert(error.message))
    }
    return (
        <div className={styled.login}>
            <div className={styled.container}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_ipIbcMvVrLRAn0rJDtsk7Hf-GYdC4hxp0g&usqp=CAU'
                    alt=''
                />
                <div className={styled.text}>
                    <h1>Sign in to messenger</h1>
                </div>
                    <Button onClick={signIn}>
                        Sign In With Google
                    </Button>
            </div>
        </div>
    )
}

export default Login
