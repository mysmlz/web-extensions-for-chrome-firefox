var key = 'bling-config';
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
    var wrapper = document.createElement('div');
    wrapper.className = 'bling-bling';
    var darkModeOption = document.createElement("div");
    darkModeOption.className = "bling-option ".concat(config.darkMode ? 'bling-option-selected' : '');
    darkModeOption.id = 'darkModeOption';
    darkModeOption.innerText = '暗';
    darkModeOption.title = '暗色模式';
    darkModeOption.onclick = function () {
        config.darkMode = !config.darkMode;
        if (config.darkMode) {
            darkModeOption.classList.add('bling-option-selected');
        }
        else {
            darkModeOption.classList.remove('bling-option-selected');
        }
        localStorage.setItem(key, JSON.stringify(config));
    };
    wrapper.appendChild(darkModeOption);
    document.querySelector('body').appendChild(wrapper);
};
//# sourceMappingURL=content.js.map