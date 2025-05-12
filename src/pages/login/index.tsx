import React from 'react'
import LoginForm from './form'
import styles from './index.module.scss'
import {Avatar} from "@arco-design/web-react";

function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Avatar className={styles.avatar} shape={"square"}  size={40} >
                <img
                     alt='avatar'
                     src='/src/assets/logo.png'
                />
            </Avatar>
                <div className={styles.title}>小曜灵码</div>
            </div>
            <div className={styles.desc}>你身边的智能ai与bot</div>
            <div>
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login
