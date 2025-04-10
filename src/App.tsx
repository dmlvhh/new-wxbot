import {useEffect, useRef, useState} from 'react'
import './App.css'
import {
    Grid,
    Card,
    Descriptions,
    Space, Avatar, List, Message, InputNumber
} from '@arco-design/web-react';
import {Form, Input, Button} from '@arco-design/web-react';
import Title from "@arco-design/web-react/es/Typography/title";
import {GetConfigApi, GetConfigType, RunBotApi, RunBotReq, UpdateConfigApi, UpdeateConfigReq} from "@/api/bot";

const {Row, Col} = Grid
const {useForm} = Form

function App() {
    const formRef = useRef<any>()
    const [form] = useForm()
    useEffect(() => {
        getConfig()
    }, []);
    // 在获取数据后设置表单值
    useEffect(() => {
        const getConfig = async () => {
            const res = await GetConfigApi()
            if (res.code !== 0) return
            setConf(res.data)
            form.setFieldsValue({
                username: res.data.username,
                password: res.data.password,
                url: res.data.url,
                reloginTime: res.data.reloginTime,
                rechargeLink: res.data.rechargeLink, // 注意字段名统一
                separationTime: res.data.separationTime,
                freezeTime: res.data.freezeTime
            })
        }
        getConfig()
    }, [form]) // 添加form依赖
    const [conf, setConf] = useState<GetConfigType>()
    const getConfig = async () => {
        const res = await GetConfigApi()
        if (res.code !== 0) return
        setConf(res.data)
    }
    const data = [
        {
            label: '名称',
            value: '不在智能AI',
        },
        {
            label: '版本',
            value: 'v1.0.0',
        },
        {
            label: 'AppID',
            value: 'gfdh454gfd',
        },
        {
            label: '授权日期',
            value: '2025-03-19 21:43:20',
        },
        {
            label: '到期时间',
            value: '永久版',
        },
    ];
    const handleSubmit = async () => {
        const values = form.getFieldsValue()
        const res = await UpdateConfigApi(values as UpdeateConfigReq)
        if (res.code !== 0) return
        Message.success("保存成功！")
        getConfig()
    }
    const [type,setType] = useState(false)
    const runBot = async (t:boolean) => {
      const res = await RunBotApi({switch:t})
        if (res.code!==0)return
        setType(t)
        Message.success("操作成功！")
    }
    return (
        <Card bordered={false} style={{marginTop: "-20px"}}>
            <Title heading={6} style={{color: "#2d88fb"}}>{'机器人信息'}</Title>
            <Row gutter={24}>
                <Col span={2}>
                    <Avatar style={{width: 60, height: 60, marginRight: 30}}>
                        <img
                            alt='avatar'
                            src='https://img2.baidu.com/it/u=356926363,96229287&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'
                        />
                    </Avatar>
                </Col>
                <Col span={22}>
                    <Descriptions
                        data={data}
                        size={'default'}
                        column={{
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 3,
                            xxl: 3
                        }}
                        layout="inline-horizontal"
                        labelStyle={{
                            width: 100,
                            textAlign: 'right',
                            paddingRight: 80,
                            whiteSpace: 'nowrap'
                        }}
                        valueStyle={{
                            minWidth: 100,
                            whiteSpace: 'pre-wrap'
                        }}
                    />
                </Col>
            </Row>
            <Title heading={6} style={{color: "#2d88fb"}}>{'配置信息'}</Title>
            <Form
                ref={formRef}
                form={form}
                labelAlign="left"
                labelCol={{span: 7, offset: 0}}
                wrapperCol={{span: 17, offset: 0}}
            >
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label={'域名'} field="url">
                            <Input placeholder='请输入后台域名'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={'用户名'} field="username">
                            <Input placeholder='用户名'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={'密码'} field="password">
                            <Input.Password placeholder='密码'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label={'自检链接'} field="rechargeLink">
                            <Input placeholder='自检链接'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={'冻结恢复'} field="freezeTime">
                            <InputNumber placeholder='冻结恢复'/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={'机卡分离'} field="separationTime">
                            <InputNumber placeholder='机卡分离'/>
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    保存配置
                </Button>
            </Form>
            <Title heading={6} style={{color: "#2d88fb"}}>{'控制中心'}</Title>
            <Space size='large'>
                <Button type='primary' onClick={()=>runBot(true)}>开始工作</Button>
                <Button status={"danger"} onClick={()=>runBot(false)}>停止工作</Button>
            </Space>
            {/*<div style={{height: "20px"}}>*/}
            {/*    <Title heading={6} style={{color: "#2d88fb"}}>{'工作日志'}</Title>*/}
            {/*    <List*/}
            {/*        virtualListProps={{*/}
            {/*            height: 300,*/}
            {/*        }}*/}
            {/*        dataSource={new Array(10000).fill(null).map((_, index) => {*/}
            {/*            const prefix = `0000${index}`.slice(-5);*/}
            {/*            return {*/}
            {/*                title: 'Beijing Bytedance Technology Co., Ltd.',*/}
            {/*                description: `(${prefix}) Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.`,*/}
            {/*            };*/}
            {/*        })}*/}
            {/*        render={(item, index) => (*/}
            {/*            <List.Item key={index}>*/}
            {/*                <List.Item.Meta*/}
            {/*                    description={item.description}*/}
            {/*                />*/}
            {/*            </List.Item>*/}
            {/*        )}*/}
            {/*    />*/}
            {/*</div>*/}
        </Card>
    )
}

export default App