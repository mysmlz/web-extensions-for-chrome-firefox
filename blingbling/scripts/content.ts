type Config = {
    /**
     * 暗色模式
     */
    darkMode?: boolean;
    /**
     * 上传和创作中心按钮
     */
    upload?: boolean;
    /**
     * 大会员按钮
     */
    vip?: boolean;
    /**
     * 精简的个人中心
     */
    compactInfo?: boolean;
    /**
     * 屏蔽单个卡片
     */
    singleCard?: boolean;
}

const key: string = 'bling-config';

const rawConfig: string = localStorage.getItem(key);
let config: Config;
if (rawConfig) {
    config = JSON.parse(rawConfig);
} else {
    config = {};
}
console.log(config);

window.onload = () => {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.className = 'bling-bling';
    const darkModeOption: HTMLDivElement = document.createElement("div");
    darkModeOption.className = `bling-option ${config.darkMode ? 'bling-option-selected' : ''}`;
    darkModeOption.id = 'darkModeOption';
    darkModeOption.innerText = '暗';
    darkModeOption.title = '暗色模式';
    darkModeOption.onclick = () => {
        config.darkMode = !config.darkMode;
        if (config.darkMode) {
            darkModeOption.classList.add('bling-option-selected');
        } else {
            darkModeOption.classList.remove('bling-option-selected');
        }
        localStorage.setItem(key, JSON.stringify(config));
    }
    wrapper.appendChild(darkModeOption);
    document.querySelector('body').appendChild(wrapper);
}

