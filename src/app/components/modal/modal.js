'use client'
import React, { Component } from 'react';
import styles from "./modal.css";


class LoginModal extends Component{
    render() {
        return <div id='loginModal' className={styles.loginModal}>
            <form >
                <div id='header'className={styles}>
                    <h2 className={styles} id='loginHeader'>Account Login</h2><br />
                    <p>Please enter your username and password to log into your account</p>
                </div>
                <div id='inputFields' className={styles}>          
                    <input placeholder='Username' type='text' id='username'name='username' className={styles.input}></input><br /><br />    
                    <input placeholder='Password' type='text' id='password'name='password' className={styles.input}></input><br /><br />
                </div>
                <div id='modalFooter' className={styles} >
                    <button id='submitForm' className={styles.button}>Sign In</button>
                </div>
            </form>
        </div>
      }
}

export default LoginModal;