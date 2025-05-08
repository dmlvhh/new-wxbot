import {Button, Form, Input, Message, Space} from '@arco-design/web-react'
import {FormInstance} from '@arco-design/web-react/es/Form'
import {IconLock, IconUser} from '@arco-design/web-react/icon'
import React, {useRef, useState} from 'react'
import styles from './index.module.scss'
import {LoginApi} from '@/api/user'
import {useDispatch} from 'react-redux'
import {setToken, setUserInfo} from "@/store/modules/usersSlice";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef<FormInstance>()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)


    const login = async (params) => {
        const res = await LoginApi(params)
        if (res.code !== 200) return
        dispatch(setUserInfo(res.data.username))
        dispatch(setToken(res.data.token))
        nav("/")
    }

    const onSubmitClick = async () => {
        const values = await formRef.current.validate()
        await login(values)
    }

    return (
        <div className={styles['login-form-wrapper']}>
            <div className={styles['login-form-title']}>Login to Enternal</div>
            <div className={styles['login-form-error-msg']}>{errorMessage}</div>
            <Form
                className={styles['login-form']}
                layout="vertical"
                ref={formRef}
                initialValues={{username: 'admin', password: '123456'}}
            >
                <Form.Item
                    field="username"
                    rules={[{required: true, message: 'login.form.userName.errMsg'}]}
                >
                    <Input prefix={<IconUser/>} placeholder={'用户名'} onPressEnter={onSubmitClick}/>
                </Form.Item>
                <Form.Item
                    field="password"
                    rules={[{required: true, message: 'login.form.password.errMsg'}]}
                >
                    <Input.Password prefix={<IconLock/>} placeholder={'密码'} onPressEnter={onSubmitClick}/>
                </Form.Item>
                <Space size={16} direction="vertical">
                    <Button type="primary" long onClick={onSubmitClick} loading={loading}>
                        {'登录'}
                    </Button>
                </Space>
            </Form>
        </div>
    )
}
