import React, {useState} from 'react';
import styles from "./index.module.scss"
import classNames from 'classnames';

interface WinOpProps {
    showSetTop?: boolean;
    showMin?: boolean;
    showMax?: boolean;
    showClose?: boolean;
    closeType?: number; // 0:关闭窗口，1:隐藏窗口
    onCloseCallBack?: () => void;
}

const WinOp: React.FC<WinOpProps> = ({
//     export default function WinOp ({
                                         showSetTop = true,
                                         showMin = true,
                                         showMax = true,
                                         showClose = true,
                                         closeType = 1,
                                         onCloseCallBack,
                                     }) => {
    const [isMax, setIsMax] = useState(false);
    const [isTop, setIsTop] = useState(false);

    const winOp = (action: string, data?: any) => {
        window.ipcRenderer?.send('winTitleOp', {action, data});
    };

    const close = () => {
        winOp('close', {closeType});
        if (onCloseCallBack) onCloseCallBack();
    };

    const minimize = () => {
        winOp('minimize');
    };

    const maximize = () => {
        const next = !isMax;
        setIsMax(next);
        winOp(next ? 'maximize' : 'unmaximize');
    };

    const top = () => {
        const next = !isTop;
        setIsTop(next);
        winOp('top', {top: next});
    };

    return (
        <div className={`${styles['win-op']} no-drag`}>
            {showSetTop && (
                <div
                    className={classNames('iconfont', 'icon-top', {[styles['win-top']]: isTop})}
                    onClick={top}
                    title={isTop ? '取消置顶' : '置顶'}
                ></div>
            )}
            {showMin && (
                <div className="iconfont icon-min" onClick={minimize} title="最小化"></div>
            )}
            {showMax && (
                <div
                    className={classNames('iconfont', isMax ? 'icon-maximize' : 'icon-max')}
                    onClick={maximize}
                    title={isMax ? '向下还原' : '最大化'}
                ></div>
            )}
            {showClose && (
                <div className="iconfont icon-close" onClick={close} title="关闭"></div>
            )}
        </div>
    );
};

export default WinOp;
