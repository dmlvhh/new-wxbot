import {Avatar, Button, Input, Layout, List, Space, Typography} from "@arco-design/web-react";
import {IconPlus, IconSearch, IconToTop} from "@arco-design/web-react/icon";
import ChatWindow from "@/components/chatWindow";
import {useState} from "react";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;
const Message = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const data = [
        {
            id: 1,
            name: 'DeepSeekV3',
            time: '今天 15:44',
            lastMessage: '你打哈师大撒大声地撒',
            avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
            id: 2,
            name: 'ChatGPT',
            time: '今天 14:20',
            lastMessage: '你好，我可以帮你做什么？',
            avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
            id: 3,
            name: 'Claude',
            time: '昨天 18:01',
            lastMessage: '请继续输入你的问题。',
            avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
            id: 4,
            name: 'DeepSeek R1',
            time: '昨天 16:01',
            lastMessage: '请继续输入你的问题。',
            avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
            id: 5,
            name: '网卡助手 N1',
            time: '昨天 12:00',
            lastMessage: '请继续输入你的问题。',
            avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
        },
    ];
    const selectedChat = data.find((item) => item.id === selectedId);

    return (
        <Layout style={{height: '100vh'}}>
            <Sider style={{width: 240}}>
                <div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 10}}>
                        <Space>
                            <Input
                                prefix={<IconSearch/>}
                                allowClear
                                placeholder="搜索"
                                style={{width: 183}}
                            />
                            <Button
                                style={{width: 30, height: 30}}
                                size="mini"
                                icon={<IconPlus/>}
                            />
                        </Space>
                    </div>

                    <List
                        dataSource={data}
                        style={{marginTop: "12px"}}
                        render={(item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedId(item.id)} // 关键：点击切换会话
                                style={{
                                    display: "flex",
                                    cursor: "pointer",
                                    padding: "10px",
                                    backgroundColor: selectedId === item.id ? "#f0f0f0" : "white",
                                    borderBottom: "1px solid #eee",
                                }}
                            >
                                <Avatar shape="square" size={40} style={{marginRight: 10}}>
                                    <img alt="avatar" src={item.avatar}/>
                                </Avatar>
                                <div style={{flex: 1}}>
                                    <div style={{display: "flex", justifyContent: "space-between", marginBottom: 4}}>
                                        <Typography.Text bold>{item.name}</Typography.Text>
                                        <Typography.Text type="secondary" style={{fontSize: 12}}>
                                            {item.time}
                                        </Typography.Text>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <Typography.Text
                                            style={{color: "#666", fontSize: 12}}>{item.lastMessage}</Typography.Text>
                                        <IconToTop style={{color: "#999"}}/>
                                    </div>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </Sider>
            <Content style={{padding: 20}}>    <ChatWindow chat={selectedChat} /></Content>
        </Layout>

    );
};

export default Message;
