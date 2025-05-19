import {Button, Checkbox, Form, Input, Link, Space} from '@arco-design/web-react'
import {FormInstance} from '@arco-design/web-react/es/Form'
import {IconCode, IconLock, IconUser} from '@arco-design/web-react/icon'
import React, {useRef, useState} from 'react'
import styles from './index.module.scss'
// import {LoginApi} from '@/api/user'
import {useDispatch} from 'react-redux'
// import {setToken, setUserInfo} from "@/store/modules/usersSlice";
import {useNavigate} from "react-router-dom";

export default function LoginForm({ setLoading }: { setLoading: (v: boolean) => void }) {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef<FormInstance>()
    const [errorMessage, setErrorMessage] = useState('')
    // const [loading, setLoading] = useState(false)


    const login = async (params) => {
        // const res = await LoginApi(params)
        // if (res.code !== 200) return
        // dispatch(setUserInfo(res.data.username))
        // dispatch(setToken(res.data.token))
        // nav("/")
        setLoading(true)
        setTimeout(() => {
            window.electronAPI.setLoginWH(1080, 630);
            nav('main');
        }, 1000);
        setLoading(false);
    }

    const onSubmitClick = async () => {
        const values = await formRef.current.validate()
        await login(values)
    }
    // const [loginParams, setLoginParams, removeLoginParams] = useStorage('loginParams')

    const [rememberPassword, setRememberPassword] = useState(false)

    return (
        <div className={styles['login-form-wrapper']}>
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
                <Form.Item
                    field="code"
                    rules={[{required: true, message: '请输入授权码'}]}
                >
                    <Input allowClear placeholder={'授权码'}/>
                </Form.Item>
                <Space size={10} direction="vertical">
                    <Button type="primary" long onClick={onSubmitClick} >
                        登录
                    </Button>
                    <div className={styles['login-form-password-actions']}>
                        <Checkbox checked={rememberPassword} onChange={setRememberPassword}>
                            记住密码
                        </Checkbox>
                        <Link>忘记密码</Link>
                    </div>
                </Space>
            </Form>
        </div>
    )
}
