import { useEffect, useRef, useState } from 'react';
import './index.scss';
import { Typography } from '@arco-design/web-react';

interface ChatWindowProps {
    chat?: { name: string; id: number; avatar: string };
}

interface Message {
    id: number;
    content: string;
    sender: 'me' | 'other';
    username: string;
    avatar: string;
}

const MOCK_CHAT_MAP: Record<number, Message[]> = {
    1: [
        { id: 1, content: '你好，我是 DeepSeekV3', sender: 'other', username: 'DeepSeekV3', avatar: '/avatar1.png' },
        { id: 2, content: '你能做什么？', sender: 'me', username: 'ikun233', avatar: '/avatar.png' },
        { id: 3, content: '我可以帮助你写代码、分析数据等。', sender: 'other', username: 'DeepSeekV3', avatar: '/avatar1.png' },
    ],
    2: [
        { id: 1, content: '你好，我是 ChatGPT。', sender: 'other', username: 'ChatGPT', avatar: '/avatar2.png' },
        { id: 2, content: '介绍一下自己', sender: 'me', username: 'ikun233', avatar: '/avatar.png' },
        { id: 3, content: '我是由 OpenAI 训练的大型语言模型。', sender: 'other', username: 'ChatGPT', avatar: '/avatar2.png' },
    ],
    5: [
        { id: 1, content: '你好，我是 网卡助手 N1。', sender: 'other', username: '天移智能售后ai', avatar: '/avatar2.png' },
        { id: 2, content: '介绍一下自己', sender: 'me', username: 'ikun233', avatar: '/avatar.png' },
        { id: 3, content: '我是由 Enternal 训练的大型语言模型。', sender: 'other', username: 'Netcard', avatar: '/avatar2.png' },
    ],
};

export default function ChatWindow({ chat }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement | null>(null);

    // 加载指定聊天会话消息
    useEffect(() => {
        if (!chat) return;
        setMessages([]); // 清空旧记录
        const timer = setTimeout(() => {
            setMessages(MOCK_CHAT_MAP[chat.id] || []);
        }, 300); // 模拟网络延迟
        return () => clearTimeout(timer);
    }, [chat]);

    // 滚动到底部
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages((prev) => [
            ...prev,
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

    if (!chat) {
        return <Typography.Text type="secondary">请选择一个会话开始聊天</Typography.Text>;
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="user-info">
                    <div className="icon">👤</div>
                    <div className="username">{chat.name}</div>
                    <div className="tag">私</div>
                </div>
            </div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-item ${msg.sender === 'other' ? 'other' : ''}`}>
                        <div className="chat-meta">
                            <span className="username">{msg.username}</span>
                            <img className="avatar" src={msg.avatar} alt="avatar" />
                        </div>
                        <div className="bubble">{msg.content}</div>
                    </div>
                ))}
                <div ref={bottomRef} />
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
