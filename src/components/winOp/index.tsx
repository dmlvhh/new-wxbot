import React, {useEffect, useState} from 'react';
import "./index.module.scss"

interface WindowControlsProps {
    showSetTop?: boolean;
    showMin?: boolean;
    showMax?: boolean;
    showClose?: boolean;
    closeType?: 0 | 1; // 0: 关闭窗口, 1: 隐藏窗口
    onCloseCallback?: () => void;
}

const WindowControls: React.FC<WindowControlsProps> = ({
        showSetTop = true,
        showMin = true,
        showMax = true,
        showClose = true,
        closeType = 1,
        onCloseCallback   }) => {
    const [isMax, setIsMax] = useState(false);
    const [isTop, setIsTop] = useState(false);

    useEffect(() => {
        setIsMax(false);
        setIsTop(false);
    }, []);

    const winOp = (action: string, data?: any) => {
        window.ipcRenderer?.send('winTitleOp', {action, data});
    };

    const handleClose = () => {
        winOp('close', {closeType});
        onCloseCallback?.();
    };

    const handleMinimize = () => {
        winOp('minimize');
    };

    const handleMaximize = () => {
        const nextMax = !isMax;
        setIsMax(nextMax);
        winOp(nextMax ? 'maximize' : 'unmaximize');
    };

    const handleTop = () => {
        const nextTop = !isTop;
        setIsTop(nextTop);
        winOp('top', {top: nextTop});
    };

    return (
            <div className="win-op no-drag">
                {showSetTop && (
                    <div
                        className={`iconfont icon-icon_top ${isTop ? 'win-top' : ''}`}
                        onClick={handleTop}
                        title={isTop ? '取消置顶' : '置顶'}
                    />
                )}
                {showMin && (
                    <div
                        className="iconfont icon-icon_min"
                        onClick={handleMinimize}
                        title="最小化"
                    />
                )}
                {showMax && (
                    <div
                        className={`iconfont ${isMax ? 'icon-lu-icon-maximize' : 'icon-icon-max'}`}
                        onClick={handleMaximize}
                        title={isMax ? '向下还原' : '最大化'}
                    />
                )}
                {showClose && (
                    <div
                        className="iconfont icon-icon_close"
                        onClick={handleClose}
                        title="关闭"
                    />
                )}
            </div>
    );
};

export default WindowControls;
