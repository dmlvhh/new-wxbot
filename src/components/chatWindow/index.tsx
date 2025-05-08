import {useState} from 'react';
import './index.scss';
import logo from '@/assets/logo.png';
import {Input} from "@arco-design/web-react";

interface Message {
    id: number;
    content: string;
    sender: 'me' | 'other';
    username: string;
    avatar: string;
}

export default function ChatWindow() {
    const [messages, setMessages] = useState<Message[]>([
        {id: 1, content: '3', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 2, content: '12', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 3, content: '1', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 4, content: '31', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 5, content: '3', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 6, content: '12', sender: 'other', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
        {id: 7, content: '1232312', sender: 'me', username: 'ikun233', avatar: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'},
    ]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages([
            ...messages,
            {
                id: Date.now(),
                content: input,
                sender: 'me',
                username: 'ikun233',
                avatar: '/avatar.png',
            },
        ]);
        setInput('');
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="user-info">
                    <div className="icon">&#128100;</div>
                    <div className="username">s18549921992</div>
                    <div className="tag">私</div>
                </div>
            </div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    // <div key={msg.id} className="chat-item">
                    <div key={msg.id} className={`chat-item ${msg.sender === 'other' ? 'other' : ''}`}>
                        <div className="chat-meta">
                            <span className="username">{msg.username}</span>
                            <img className="avatar" src={msg.avatar} alt="avatar"/>
                        </div>
                        <div className="bubble">{msg.content}</div>
                    </div>
                ))}
            </div>

            <div className="chat-bottom">
                <div className="toolbar">
                    <span className="icon">📎</span>
                    <span className="icon">📷</span>
                    <span className="icon">📁</span>
                </div>
                <div className="input-area">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="请输入消息..."
                        rows={3}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                    />
                    <div className="footer">
                        <span className="counter">{input.length} / 2048</span>
                        <span className="hint">Enter发送，Shift+Enter换行</span>
                        <button onClick={sendMessage}>发送</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
