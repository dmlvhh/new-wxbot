import {Empty} from '@arco-design/web-react';
import styles from "./index.module.scss"

const App = () => {
    return (
        <div className={styles.container}>
            <Empty
                imgSrc='src/assets/xss.png'
                description={"专注于xss远程脚本攻击的跨平台工具"}
            />
        </div>
    );
};

export default App;
