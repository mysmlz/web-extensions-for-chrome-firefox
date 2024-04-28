console.log('BlingBling');
var key = 'bling-config';
var blingOptionClass = 'bling-option';
var blingOptionSelectedClass = 'bling-option-selected';
var rawConfig = localStorage.getItem(key);
var config;
if (rawConfig) {
    config = JSON.parse(rawConfig);
}
else {
    config = {};
}
console.log(config);
window.onload = function () {
    var body = document.querySelector('#i_cecream');
    var uploads = document.querySelectorAll('.right-entry-item');
    var vip = document.querySelector('.vip-wrap');
    var wrapper = document.createElement('div');
    wrapper.className = 'bling-bling';
    setOption(wrapper, [body], 'darkModeOption', '暗', '暗色模式', 'bling-dark', 'darkMode');
    setOption(wrapper, uploads, 'uploadOption', '传', '隐藏上传', 'bling-hide', 'uploadHidden');
    setOption(wrapper, [vip], 'vipOption', 'vip', '隐藏大会员', 'bling-hide', 'vipHidden');
    document.querySelector('body').appendChild(wrapper);
};
function setOption(wrapper, uploads, id, innerText, title, elementClass, _key) {
    var option = document.createElement("div");
    option.className = blingOptionClass;
    option.id = id;
    option.innerText = innerText;
    option.title = title;
    optionSwitch(uploads, option, elementClass, config[_key]);
    option.onclick = function () {
        config[_key] = !config[_key];
        optionSwitch(uploads, option, elementClass, config[_key]);
        localStorage.setItem(key, JSON.stringify(config));
    };
    wrapper.appendChild(option);
}
function optionSwitch(elements, option, elementClass, flag) {
    if (flag) {
        option.classList.add(blingOptionSelectedClass);
        elements.forEach(function (element) { return element.classList.add(elementClass); });
    }
    else {
        option.classList.remove(blingOptionSelectedClass);
        elements.forEach(function (element) { return element.classList.remove(elementClass); });
    }
}
//# sourceMappingURL=content.js.map