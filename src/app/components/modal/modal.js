'use client'
import React, { Component } from 'react';
import styles from "./modal.css";


class LoginModal extends Component{
    constructor(){
        super();
        this.username = '';
        this.password = '';
    }

    handleSubmit(){

    }

    handleChangeUsername(value){
        this.username = value;
    }

    handleChangePassword(value){
        this.password = value;
    }

    render() {
        return <div id='loginModal' className={styles.loginModal}>
            <form >
                <div id='header'className={styles}>
                    <h2 className={styles} id='loginHeader'>Account Login</h2><br />
                    <p>Enter your login details below.</p>
                </div>
                <div class="form__group field">
                    <input type="input" class="form__field" placeholder="username" name="username" id='username' required />
                    <label for="username" class="form__label">Username</label>
                    <input type="input" class="form__field" placeholder="password" name="password" id='password' required />
                    <label for="password" class="form__label">Password</label>
                </div>      
                <div id='modalFooter' className={styles} >
                    <button id='submitForm' className={styles.button}>Sign In</button>
                    <p>
                        <a href="url">Forgot Password?</a>
                    </p>
                </div>
            </form>
        </div>

      }
}

export default LoginModal;