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
     * 屏蔽推广卡片
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
    const body: HTMLElement = document.querySelector('body');
    const uploads: NodeListOf<HTMLElement> = document.querySelectorAll('.right-entry-item');
    const vip: HTMLElement = document.querySelector('.vip-wrap');
    //wrapper
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.className = 'bling-bling';
    if (location.href.match(/[\s\S]+com\/video\//)) {
        wrapper.classList.add('bling-bling-video');
    }
    //暗色模式
    const darkSvg: string = '<svg t="1714406776534" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13320" width="20" height="20"><path d="M89.85 197.55m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor" p-id="13321"></path><path d="M135.4 99.52m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor" p-id="13322"></path><path d="M934.15 145.07m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor" p-id="13323"></path><path d="M612.93 189.8V194.82h0.51c2.42 15.26 15.54 26.96 31.48 26.96h196.21c15.94 0 29.05-11.7 31.48-26.96h0.5v-15.45c0-17.67-14.31-31.98-31.98-31.98H644.91c-17.66 0-31.99 14.32-31.99 31.98v10.43zM619.43 411.04V416.06h0.51c2.42 15.26 15.54 26.96 31.48 26.96h196.21c15.94 0 29.05-11.7 31.48-26.96h0.5v-15.45c0-17.67-14.31-31.98-31.98-31.98H651.42c-17.66 0-31.99 14.32-31.99 31.98v10.43z" fill="currentColor" p-id="13324"></path><path d="M632.26 430.79c0.01 0 0.01 0.01 0.03 0.02l3.25 3.78 0.39-0.33c11.79 10 29.36 10.31 41.45-0.09l178.53-217.51c12.09-10.39 14.4-27.81 6.28-40.97l0.38-0.32-3.27-3.81-5.83-6.77-0.97-1.13c-11.52-13.4-31.7-14.91-45.1-3.39L628.86 377.78c-13.39 11.51-14.91 31.72-3.39 45.11l0.97 1.13 5.82 6.77z" fill="currentColor" p-id="13325"></path><path d="M511.94 950.5c-233.06 0-422.66-189.65-422.66-422.75 0-190.41 128.42-358.05 312.31-407.65 13.22-3.52 27.25 1.33 35.41 12.34 8.14 11.01 8.71 25.88 1.42 37.47-31.43 50.03-48.04 107.45-48.04 166.05 0 172.59 140.48 313.02 313.17 313.02 58.73 0 116.22-16.67 166.28-48.23a33.279 33.279 0 0 1 37.49 1.37 33.281 33.281 0 0 1 12.37 35.4C870.16 821.8 702.49 950.5 511.94 950.5zM344.17 213.93C230.3 274.77 155.8 394.66 155.8 527.76c0 196.42 159.76 356.22 356.13 356.22 133.25 0 253.21-74.72 314-188.92a376.765 376.765 0 0 1-122.39 20.44c-209.36 0-379.7-170.26-379.7-379.53 0.01-41.53 6.87-82.76 20.33-122.04z m0 0" fill="currentColor" p-id="13326"></path></svg>';
    setOption(wrapper, [body], 'darkModeOption', darkSvg, '暗色模式', 'bling-dark', 'darkMode');
    //上传和创作中心按钮隐藏
    const uploadSvg: string = '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="right-entry-icon"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.74286H17.5V20.0762H2.5V1.74286Z" fill="currentColor"></path></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 1.74286C9.92916 1.74286 9.85916 1.74369 9.78833 1.74536C5.85416 1.85453 2.58416 5.14869 2.50166 9.08286C2.44999 11.5404 3.58666 13.7304 5.36999 15.1337C5.52166 15.2529 5.63166 15.4162 5.67333 15.6045L6.30416 18.447C6.51583 19.3987 7.36083 20.0762 8.33583 20.0762H11.6617C12.6383 20.0762 13.4842 19.3987 13.6958 18.4445L14.3275 15.602C14.3692 15.4154 14.4775 15.2537 14.6275 15.1354C16.3733 13.7629 17.5 11.637 17.5 9.24286C17.5 5.10036 14.1425 1.74286 9.99999 1.74286ZM10.0003 3.40939C13.2161 3.40939 15.8336 6.02606 15.8336 9.24273C15.8336 11.0386 15.0186 12.7086 13.5978 13.8252C13.1428 14.1827 12.8244 14.6852 12.7011 15.2402L12.0686 18.0827C12.0269 18.2752 11.8586 18.4094 11.6619 18.4094H8.33609C8.14109 18.4094 7.97359 18.2761 7.93192 18.0852L7.30025 15.2427C7.17609 14.6869 6.85775 14.1827 6.40109 13.8236C4.94359 12.6769 4.12942 10.9619 4.16859 9.11773C4.23192 6.05523 6.77442 3.49606 9.83442 3.41189C9.88942 3.41023 9.94525 3.40939 10.0003 3.40939Z" fill="currentColor"></path><path d="M10 6.81299L8.81253 9.18726H11.1875L9.99952 11.561" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></g><path d="M6.66656 15.9095H13.3332" stroke="currentColor" stroke-width="1.7"></path></svg>';
    setOption(wrapper, uploads, 'uploadOption', uploadSvg, '隐藏上传', 'bling-hide', 'uploadHidden');
    //大会员按钮隐藏
    const vipSvg: string = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="right-entry-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C5.02955 1 1 5.02955 1 10C1 14.9705 5.02955 19 10 19C14.9705 19 19 14.9705 19 10C19 5.02955 14.9705 1 10 1ZM10.0006 2.63614C14.0612 2.63614 17.3642 5.93996 17.3642 9.99977C17.3642 14.0604 14.0612 17.3634 10.0006 17.3634C5.93996 17.3634 2.63696 14.0604 2.63696 9.99977C2.63696 5.93996 5.93996 2.63614 10.0006 2.63614Z" fill="currentColor"></path><path d="M13.1381 8.05573V8.05331H10.7706C10.7859 7.8643 10.7948 7.67286 10.7948 7.47981C10.7948 7.26414 10.7843 7.05008 10.7649 6.83926C10.7658 6.82552 10.7674 6.81179 10.7674 6.79725V6.79483C10.7674 6.35541 10.4111 6 9.97254 6C9.53312 6 9.17771 6.35622 9.17771 6.79483V6.79725C9.17771 6.85137 9.18336 6.90468 9.19386 6.95557L9.18255 6.95719C9.19871 7.12924 9.20759 7.30291 9.20759 7.479C9.20759 7.67286 9.19709 7.8643 9.17771 8.0525H6.74313V8.05573C6.32876 8.08239 6 8.42649 6 8.84814V8.85057C6 9.28998 6.33683 9.64216 6.77544 9.64216C6.80937 9.64216 6.8441 9.64378 6.89903 9.64297L8.7601 9.63893C8.28837 10.7294 7.47011 11.6341 6.44507 12.2149C6.44023 12.2173 6.43619 12.2197 6.43134 12.2229C6.42003 12.2294 6.40953 12.2359 6.39822 12.2423L6.39903 12.2431C6.17528 12.3837 6.02585 12.6325 6.02585 12.916V12.9184C6.02585 13.3578 6.38207 13.7132 6.82068 13.7132C6.99111 13.7132 7.14782 13.6591 7.27706 13.5687C8.7706 12.706 9.9168 11.3094 10.4556 9.64055H13.0105C13.0517 9.64136 13.1131 9.63893 13.1131 9.63893C13.5905 9.62924 13.9039 9.2916 13.9039 8.85299V8.85057C13.9047 8.42003 13.5638 8.07108 13.1381 8.05573Z" fill="currentColor"></path><path d="M13.7731 12.5388C13.7715 12.5356 13.7691 12.5331 13.7674 12.5307C13.74 12.4814 13.7077 12.4362 13.6713 12.3942C13.1584 11.6672 12.513 11.0412 11.7674 10.5541L11.7666 10.555C11.6366 10.4613 11.4766 10.4055 11.3046 10.4055C10.8652 10.4055 10.5098 10.7617 10.5098 11.2003V11.2028C10.5098 11.5033 10.677 11.765 10.9233 11.8999C11.5615 12.3215 12.0825 12.8045 12.4944 13.4499L12.5372 13.5041C12.6786 13.6333 12.866 13.7133 13.0728 13.7133C13.5122 13.7133 13.8676 13.3571 13.8676 12.9184V12.916C13.8668 12.7795 13.8329 12.6511 13.7731 12.5388Z" fill="currentColor"></path></svg>';
    setOption(wrapper, [vip], 'vipOption', vipSvg, '隐藏大会员', 'bling-hide', 'vipHidden');
    //屏蔽推广卡片
    const singleSvg: string = '<svg t="1714407256809" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19861" id="mx_n_1714407256810" width="20" height="20"><path d="M132.740741 322.37037a37.925926 37.925926 0 0 0-37.925926 37.925926v474.074074a37.925926 37.925926 0 0 0 37.925926 37.925926h758.518518a37.925926 37.925926 0 0 0 37.925926-37.925926V360.296296a37.925926 37.925926 0 0 0-37.925926-37.925926H132.740741z m0-75.851851h758.518518a113.777778 113.777778 0 0 1 113.777778 113.777777v474.074074a113.777778 113.777778 0 0 1-113.777778 113.777778H132.740741a113.777778 113.777778 0 0 1-113.777778-113.777778V360.296296a113.777778 113.777778 0 0 1 113.777778-113.777777z m85.333333-189.62963h587.851852a28.444444 28.444444 0 0 1 0 56.888889h-587.851852a28.444444 28.444444 0 0 1 0-56.888889z m-75.851852 94.814815h739.555556a28.444444 28.444444 0 0 1 0 56.888889h-739.555556a28.444444 28.444444 0 0 1 0-56.888889z" fill="currentColor" p-id="19862"></path><path d="M189.62963 455.111111m28.444444 0l587.851852 0q28.444444 0 28.444444 28.444445l0 0q0 28.444444-28.444444 28.444444l-587.851852 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444445Z" fill="currentColor" p-id="19863"></path></svg>';
    setOption(wrapper, [], 'singleCardOption', singleSvg, '屏蔽单个卡片', 'bling-single-hide', 'singleCardHidden', '.floor-single-card');
    const interval: number = setInterval(() => {
        const singleCard: NodeListOf<HTMLElement> = document.querySelectorAll('.floor-single-card');
        if (singleCard.length > 4) {
            elementsClassSwitch(singleCard, 'bling-single-hide', config.singleCardHidden);
            clearInterval(interval);
        }
    }, 125);
    body.onwheel = function () {
        console.log('wheel');
        const singleCard: NodeListOf<HTMLElement> = document.querySelectorAll('.floor-single-card');
        elementsClassSwitch(singleCard, 'bling-single-hide', config.singleCardHidden);
    }
    document.querySelector('body').appendChild(wrapper);
}

function setOption(wrapper: HTMLDivElement, elements: Array<HTMLElement> | NodeListOf<HTMLElement>, id: string, innerHTML: string, title: string,
                   elementClass: string, _key: Key, wheelSelectors: string = '') {
    const option: HTMLDivElement = document.createElement("div");
    option.className = blingOptionClass;
    option.id = id;
    option.innerHTML = innerHTML;
    option.title = title;
    optionSwitch(elements, option, elementClass, config[_key]);
    option.onclick = () => {
        config[_key] = !config[_key];
        if (wheelSelectors) {
            const _elements: NodeListOf<HTMLElement> = document.querySelectorAll(wheelSelectors);
            optionSwitch(_elements, option, elementClass, config[_key]);
        } else {
            optionSwitch(elements, option, elementClass, config[_key]);
        }
        localStorage.setItem(key, JSON.stringify(config));
    }
    wrapper.appendChild(option);
}

function optionClassSwitch(option: HTMLDivElement, flag: boolean) {
    if (flag) {
        option.classList.add(blingOptionSelectedClass);
    } else {
        option.classList.remove(blingOptionSelectedClass);
    }
}

function elementsClassSwitch(elements: Array<HTMLElement> | NodeListOf<HTMLElement>, elementClass: string, flag: boolean) {
    if (flag) {
        elements.forEach((element: HTMLElement) => element?.classList.add(elementClass));
    } else {
        elements.forEach((element: HTMLElement) => element?.classList.remove(elementClass));
    }
}

function optionSwitch(elements: Array<HTMLElement> | NodeListOf<HTMLElement>, option: HTMLDivElement, elementClass: string, flag: boolean) {
    optionClassSwitch(option, flag);
    elementsClassSwitch(elements, elementClass, flag);
}
