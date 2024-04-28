type Config = {
    /**
     * 暗色模式
     */
    darkMode?: boolean;
    /**
     * 上传和创作中心按钮隐藏
     */
    uploadHidden?: boolean;
    /**
     * 大会员按钮隐藏
     */
    vipHidden?: boolean;
    /**
     * 精简的个人中心
     */
    compactInfo?: boolean;
    /**
     * 屏蔽单个卡片
     */
    singleCardHidden?: boolean;
}

type Key = keyof Config;

console.log('BlingBling');

const key: string = 'bling-config';
const blingOptionClass: string = 'bling-option';
const blingOptionSelectedClass: string = 'bling-option-selected';

const rawConfig: string = localStorage.getItem(key);
let config: Config;
if (rawConfig) {
    config = JSON.parse(rawConfig);
} else {
    config = {};
}
console.log(config);

window.onload = () => {
    const body: HTMLElement = document.querySelector('#i_cecream');
    const uploads: NodeListOf<HTMLElement> = document.querySelectorAll('.right-entry-item');
    const vip: HTMLElement = document.querySelector('.vip-wrap');
    //wrapper
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.className = 'bling-bling';
    //暗色模式
    setOption(wrapper, [body], 'darkModeOption', '暗', '暗色模式', 'bling-dark', 'darkMode');
    //上传和创作中心按钮隐藏
    setOption(wrapper, uploads, 'uploadOption', '传', '隐藏上传', 'bling-hide', 'uploadHidden');
    //大会员按钮隐藏
    setOption(wrapper, [vip], 'vipOption', 'vip', '隐藏大会员', 'bling-hide', 'vipHidden');
    document.querySelector('body').appendChild(wrapper);
}

function setOption(wrapper: HTMLDivElement, uploads: Array<HTMLElement> | NodeListOf<HTMLElement>, id: string, innerText: string, title: string, elementClass: string, _key: Key) {
    const option: HTMLDivElement = document.createElement("div");
    option.className = blingOptionClass;
    option.id = id;
    option.innerText = innerText;
    option.title = title;
    optionSwitch(uploads, option, elementClass, config[_key]);
    option.onclick = () => {
        config[_key] = !config[_key];
        optionSwitch(uploads, option, elementClass, config[_key]);
        localStorage.setItem(key, JSON.stringify(config));
    }
    wrapper.appendChild(option);
}

function optionSwitch(elements: Array<HTMLElement> | NodeListOf<HTMLElement>, option: HTMLDivElement, elementClass: string, flag: boolean) {
    if (flag) {
        option.classList.add(blingOptionSelectedClass);
        elements.forEach((element: HTMLElement) => element.classList.add(elementClass));
    } else {
        option.classList.remove(blingOptionSelectedClass);
        elements.forEach((element: HTMLElement) => element.classList.remove(elementClass));
    }
}
