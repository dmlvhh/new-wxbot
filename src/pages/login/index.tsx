import React from 'react'
import LoginForm from './form'
import LoginBanner from './banner'
import styles from './index.module.scss'
import Footer from "@arco-design/web-react/es/DatePicker/panels/footer";

function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/*<Logo />*/}
        <div className={styles['logo-text']}>Enternal</div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-inner']}>
          <LoginBanner />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
Login.displayName = 'LoginPage'

export default Login
