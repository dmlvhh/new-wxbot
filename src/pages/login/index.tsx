import React, {useState} from 'react'
import LoginForm from './form'
import styles from './index.module.scss'
import {Avatar} from "@arco-design/web-react";

function Login() {
    const [loading, setLoading] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {loading && (
                    <div className={styles.loadingPanel}>
                        <img src="/src/assets/img/loading.gif" alt="loading..."/>
                    </div>
                )}
                <div className={styles.logo}><Avatar className={styles.avatar} shape={"square"} size={40}>
                    <img
                        alt='avatar'
                        src='/src/assets/logo.png'
                    />
                </Avatar>
                    <div className={styles.title}>小曜灵码</div>
                </div>
                <div className={styles.desc}>你身边的智能ai与bot</div>
            </div>
            <div>
                {/*<LoginForm/>*/}
                {!loading && <LoginForm setLoading={setLoading} />}
            </div>
        </div>
    )
}

export default Login
