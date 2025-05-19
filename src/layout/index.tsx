import {Layout, Button, Dropdown, Menu, Avatar, Image, Message, Icon} from '@arco-design/web-react';
import {IconCaretRight, IconCaretLeft, IconDown, IconUser, IconApps} from '@arco-design/web-react/icon';
import styles from "./index.module.scss"
import {useState} from "react";
import {Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Footer from "@arco-design/web-react/es/DatePicker/panels/footer";
import {Grid} from '@arco-design/web-react';
import { ReactComponent as MessageIcon } from '../assets/img/message.svg';
import message from "@/assets/img/消息.png"

const Row = Grid.Row;
const Col = Grid.Col;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;
import logo from '@/assets/logo.png';
import WinOp from "@/components/winOp";
const MainLayout = () => {
    const navigate = useNavigate();

    const handleMenuClick = (key: string) => {
        console.log("k",key)
        switch (key) {
            case '0':
                navigate('message');
                break;
            case '1':
                navigate('friend');
                break;
            case '2':
                navigate('models');
                break;
            case '3':
                navigate('apps');
                break;
            default:
                break;
        }
    };

    return (
        <Layout style={{height: '100vh'}}>
            {/*<Header>Header</Header>*/}
            <Layout>
                <Sider style={{width: '50px'}}>
                    <Menu mode='pop' onClickMenuItem={handleMenuClick}>
                        <Avatar  shape='square' size={30} style={{marginBottom:"10px",marginLeft:"3px",marginTop:"3px"}}>
                            <img
                                alt='avatar'
                                src={logo}
                            />
                        </Avatar>
                        <Menu.Item key='0'>
                            <div className="iconfont icon-xiaoxi" style={{fontSize:"20px",marginLeft:"-4px"}}></div>
                        </Menu.Item>
                        <Menu.Item key='1'>
                        <div className="iconfont icon-haoyou" style={{fontSize:"18px",marginLeft:"-4px"}}></div>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <div className="iconfont icon-jiqiren" style={{fontSize:"18px",marginLeft:"-4px"}}></div>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <div className="iconfont icon-yingyong" style={{fontSize:"18px",marginLeft:"-4px"}}></div>
                        </Menu.Item>
                    </Menu>
                </Sider>
                {/*<Sider style={{width: '240px', marginLeft: '1px'}}><Outlet/></Sider>*/}
                {/*<Content>2131231</Content>*/}

                {/* 右侧内容交给嵌套路由控制 */}
                <Layout style={{ flex: 1 }}>
                    <Outlet />
                </Layout>
                <WinOp showClose={true} showMax={true} showMin={true} showSetTop={true} />
            </Layout>
        </Layout>
    );
};

export default MainLayout
