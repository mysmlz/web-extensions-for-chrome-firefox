console.log('BlingBling');
var key = 'bling-config';
var blingOptionClass = 'bling-option';
var blingOptionSelectedClass = 'bling-option-selected';
var timeout = 125;
var times = 50;
var rawConfig;
browser.storage.local.get(key).then(function (value) {
    rawConfig = value[key];
}, function () {
    console.error("error");
});
var config;
window.onload = function () {
    if (rawConfig) {
        config = JSON.parse(rawConfig);
    }
    else {
        config = {};
    }
    var _interval = setInterval(function () {
        if (!config || JSON.stringify(config) === '{}') {
            config = JSON.parse(rawConfig);
        }
        else {
            clearInterval(_interval);
            console.log(config);
        }
    }, 200);
    var body = document.querySelector('body');
    var wrapper = document.createElement('div');
    wrapper.className = 'bling-bling';
    if (location.href.match(/[\s\S]+com\/video\//)) {
        wrapper.classList.add('bling-bling-video');
    }
    var darkSvg = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M89.85 197.55m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor"></path><path d="M135.4 99.52m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor"></path><path d="M934.15 145.07m-26.03 0a26.03 26.03 0 1 0 52.06 0 26.03 26.03 0 1 0-52.06 0Z" fill="currentColor"></path><path d="M612.93 189.8V194.82h0.51c2.42 15.26 15.54 26.96 31.48 26.96h196.21c15.94 0 29.05-11.7 31.48-26.96h0.5v-15.45c0-17.67-14.31-31.98-31.98-31.98H644.91c-17.66 0-31.99 14.32-31.99 31.98v10.43zM619.43 411.04V416.06h0.51c2.42 15.26 15.54 26.96 31.48 26.96h196.21c15.94 0 29.05-11.7 31.48-26.96h0.5v-15.45c0-17.67-14.31-31.98-31.98-31.98H651.42c-17.66 0-31.99 14.32-31.99 31.98v10.43z" fill="currentColor"></path><path d="M632.26 430.79c0.01 0 0.01 0.01 0.03 0.02l3.25 3.78 0.39-0.33c11.79 10 29.36 10.31 41.45-0.09l178.53-217.51c12.09-10.39 14.4-27.81 6.28-40.97l0.38-0.32-3.27-3.81-5.83-6.77-0.97-1.13c-11.52-13.4-31.7-14.91-45.1-3.39L628.86 377.78c-13.39 11.51-14.91 31.72-3.39 45.11l0.97 1.13 5.82 6.77z" fill="currentColor"></path><path d="M511.94 950.5c-233.06 0-422.66-189.65-422.66-422.75 0-190.41 128.42-358.05 312.31-407.65 13.22-3.52 27.25 1.33 35.41 12.34 8.14 11.01 8.71 25.88 1.42 37.47-31.43 50.03-48.04 107.45-48.04 166.05 0 172.59 140.48 313.02 313.17 313.02 58.73 0 116.22-16.67 166.28-48.23a33.279 33.279 0 0 1 37.49 1.37 33.281 33.281 0 0 1 12.37 35.4C870.16 821.8 702.49 950.5 511.94 950.5zM344.17 213.93C230.3 274.77 155.8 394.66 155.8 527.76c0 196.42 159.76 356.22 356.13 356.22 133.25 0 253.21-74.72 314-188.92a376.765 376.765 0 0 1-122.39 20.44c-209.36 0-379.7-170.26-379.7-379.53 0.01-41.53 6.87-82.76 20.33-122.04z m0 0" fill="currentColor"></path></svg>';
    setOption(wrapper, [body], 'darkModeOption', darkSvg, '暗色模式', 'bling-dark', 'darkMode');
    var uploadSvg = '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="right-entry-icon"><mask id="mask0" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.74286H17.5V20.0762H2.5V1.74286Z" fill="currentColor"></path></mask><g mask="url(#mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 1.74286C9.92916 1.74286 9.85916 1.74369 9.78833 1.74536C5.85416 1.85453 2.58416 5.14869 2.50166 9.08286C2.44999 11.5404 3.58666 13.7304 5.36999 15.1337C5.52166 15.2529 5.63166 15.4162 5.67333 15.6045L6.30416 18.447C6.51583 19.3987 7.36083 20.0762 8.33583 20.0762H11.6617C12.6383 20.0762 13.4842 19.3987 13.6958 18.4445L14.3275 15.602C14.3692 15.4154 14.4775 15.2537 14.6275 15.1354C16.3733 13.7629 17.5 11.637 17.5 9.24286C17.5 5.10036 14.1425 1.74286 9.99999 1.74286ZM10.0003 3.40939C13.2161 3.40939 15.8336 6.02606 15.8336 9.24273C15.8336 11.0386 15.0186 12.7086 13.5978 13.8252C13.1428 14.1827 12.8244 14.6852 12.7011 15.2402L12.0686 18.0827C12.0269 18.2752 11.8586 18.4094 11.6619 18.4094H8.33609C8.14109 18.4094 7.97359 18.2761 7.93192 18.0852L7.30025 15.2427C7.17609 14.6869 6.85775 14.1827 6.40109 13.8236C4.94359 12.6769 4.12942 10.9619 4.16859 9.11773C4.23192 6.05523 6.77442 3.49606 9.83442 3.41189C9.88942 3.41023 9.94525 3.40939 10.0003 3.40939Z" fill="currentColor"></path><path d="M10 6.81299L8.81253 9.18726H11.1875L9.99952 11.561" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></g><path d="M6.66656 15.9095H13.3332" stroke="currentColor" stroke-width="1.7"></path></svg>';
    setOption(wrapper, [], 'uploadOption', uploadSvg, '隐藏上传', 'bling-hide', 'uploadHidden');
    var vipSvg = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="right-entry-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C5.02955 1 1 5.02955 1 10C1 14.9705 5.02955 19 10 19C14.9705 19 19 14.9705 19 10C19 5.02955 14.9705 1 10 1ZM10.0006 2.63614C14.0612 2.63614 17.3642 5.93996 17.3642 9.99977C17.3642 14.0604 14.0612 17.3634 10.0006 17.3634C5.93996 17.3634 2.63696 14.0604 2.63696 9.99977C2.63696 5.93996 5.93996 2.63614 10.0006 2.63614Z" fill="currentColor"></path><path d="M13.1381 8.05573V8.05331H10.7706C10.7859 7.8643 10.7948 7.67286 10.7948 7.47981C10.7948 7.26414 10.7843 7.05008 10.7649 6.83926C10.7658 6.82552 10.7674 6.81179 10.7674 6.79725V6.79483C10.7674 6.35541 10.4111 6 9.97254 6C9.53312 6 9.17771 6.35622 9.17771 6.79483V6.79725C9.17771 6.85137 9.18336 6.90468 9.19386 6.95557L9.18255 6.95719C9.19871 7.12924 9.20759 7.30291 9.20759 7.479C9.20759 7.67286 9.19709 7.8643 9.17771 8.0525H6.74313V8.05573C6.32876 8.08239 6 8.42649 6 8.84814V8.85057C6 9.28998 6.33683 9.64216 6.77544 9.64216C6.80937 9.64216 6.8441 9.64378 6.89903 9.64297L8.7601 9.63893C8.28837 10.7294 7.47011 11.6341 6.44507 12.2149C6.44023 12.2173 6.43619 12.2197 6.43134 12.2229C6.42003 12.2294 6.40953 12.2359 6.39822 12.2423L6.39903 12.2431C6.17528 12.3837 6.02585 12.6325 6.02585 12.916V12.9184C6.02585 13.3578 6.38207 13.7132 6.82068 13.7132C6.99111 13.7132 7.14782 13.6591 7.27706 13.5687C8.7706 12.706 9.9168 11.3094 10.4556 9.64055H13.0105C13.0517 9.64136 13.1131 9.63893 13.1131 9.63893C13.5905 9.62924 13.9039 9.2916 13.9039 8.85299V8.85057C13.9047 8.42003 13.5638 8.07108 13.1381 8.05573Z" fill="currentColor"></path><path d="M13.7731 12.5388C13.7715 12.5356 13.7691 12.5331 13.7674 12.5307C13.74 12.4814 13.7077 12.4362 13.6713 12.3942C13.1584 11.6672 12.513 11.0412 11.7674 10.5541L11.7666 10.555C11.6366 10.4613 11.4766 10.4055 11.3046 10.4055C10.8652 10.4055 10.5098 10.7617 10.5098 11.2003V11.2028C10.5098 11.5033 10.677 11.765 10.9233 11.8999C11.5615 12.3215 12.0825 12.8045 12.4944 13.4499L12.5372 13.5041C12.6786 13.6333 12.866 13.7133 13.0728 13.7133C13.5122 13.7133 13.8676 13.3571 13.8676 12.9184V12.916C13.8668 12.7795 13.8329 12.6511 13.7731 12.5388Z" fill="currentColor"></path></svg>';
    setOption(wrapper, [], 'vipOption', vipSvg, '隐藏大会员', 'bling-hide', 'vipHidden');
    var singleSvg = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M132.740741 322.37037a37.925926 37.925926 0 0 0-37.925926 37.925926v474.074074a37.925926 37.925926 0 0 0 37.925926 37.925926h758.518518a37.925926 37.925926 0 0 0 37.925926-37.925926V360.296296a37.925926 37.925926 0 0 0-37.925926-37.925926H132.740741z m0-75.851851h758.518518a113.777778 113.777778 0 0 1 113.777778 113.777777v474.074074a113.777778 113.777778 0 0 1-113.777778 113.777778H132.740741a113.777778 113.777778 0 0 1-113.777778-113.777778V360.296296a113.777778 113.777778 0 0 1 113.777778-113.777777z m85.333333-189.62963h587.851852a28.444444 28.444444 0 0 1 0 56.888889h-587.851852a28.444444 28.444444 0 0 1 0-56.888889z m-75.851852 94.814815h739.555556a28.444444 28.444444 0 0 1 0 56.888889h-739.555556a28.444444 28.444444 0 0 1 0-56.888889z" fill="currentColor"></path><path d="M189.62963 455.111111m28.444444 0l587.851852 0q28.444444 0 28.444444 28.444445l0 0q0 28.444444-28.444444 28.444444l-587.851852 0q-28.444444 0-28.444444-28.444444l0 0q0-28.444444 28.444444-28.444445Z" fill="currentColor"></path></svg>';
    setOption(wrapper, [], 'singleCardOption', singleSvg, '屏蔽单个卡片', 'bling-single-hide', 'singleCardHidden', '.floor-single-card');
    var liveSvg = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M392.533333 806.4H160c-57.6 0-102.4-46.933333-102.4-102.4V347.733333c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333334 21.333333V704c0 34.133333 27.733333 59.733333 59.733333 59.733333h232.533333c12.8 0 21.333333 8.533333 21.333334 21.333334s-10.666667 21.333333-21.333334 21.333333z" fill="currentColor"></path><path d="M665.6 806.4h-61.866667c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333334h61.866667c21.333333 0 40.533333-19.2 40.533333-42.666666V270.933333c0-23.466667-19.2-42.666667-42.666666-42.666666H142.933333c-23.466667 0-42.666667 19.2-42.666666 42.666666v85.333334c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333v-85.333334c0-46.933333 38.4-85.333333 85.333333-85.333333h520.533334c46.933333 0 85.333333 38.4 85.333333 85.333333v452.266667c0 44.8-36.266667 83.2-83.2 83.2z" fill="currentColor"></path><path d="M945.066667 742.4c-2.133333 0-6.4 0-8.533334-2.133333l-206.933333-85.333334c-10.666667-4.266667-17.066667-17.066667-10.666667-27.733333s17.066667-17.066667 27.733334-10.666667l177.066666 74.666667V292.266667L746.666667 364.8c-10.666667 4.266667-23.466667 0-27.733334-10.666667-4.266667-10.666667 0-23.466667 10.666667-27.733333l206.933333-85.333333c6.4-2.133333 14.933333-2.133333 19.2 2.133333 6.4 4.266667 8.533333 10.666667 8.533334 17.066667v462.933333c0 6.4-4.266667 12.8-8.533334 17.066667-2.133333 2.133333-6.4 2.133333-10.666666 2.133333z" fill="currentColor"></path><path d="M499.2 785.066667m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="currentColor"></path><path d="M324.266667 320H187.733333c-12.8 0-21.333333 8.533333-21.333333 21.333333s8.533333 21.333333 21.333333 21.333334h136.533334c12.8 0 21.333333-8.533333 21.333333-21.333334s-8.533333-21.333333-21.333333-21.333333z" fill="currentColor"></path></svg>';
    setOption(wrapper, [], 'liveOption', liveSvg, '隐藏直播', 'bling-hide', 'liveHidden');
    var founderSvg = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M495.192923 131.258137a25.424032 25.424032 0 0 1-13.650487 33.102431 25.253401 25.253401 0 0 1-34.126218-13.991749c-7.166506-18.086896-13.991749-36.173791-20.646362-54.431318l-5.801457-17.063109A1056.718341 1056.718341 0 0 1 283.098478 358.368118a513.770212 513.770212 0 0 1-166.194682 153.567981 518.206621 518.206621 0 0 1 166.194682 153.567981 1069.686304 1069.686304 0 0 1 138.552445 280.005619A1064.226109 1064.226109 0 0 1 560.032737 665.50408a518.206621 518.206621 0 0 1 166.194682-153.567981l-14.844905-8.360924a427.772143 427.772143 0 0 1-54.601949-39.24515 25.424032 25.424032 0 0 1-3.24199-35.832529 26.447819 26.447819 0 0 1 17.063109-9.043448 25.765295 25.765295 0 0 1 18.428157 5.801457A368.563155 368.563155 0 0 0 737.489071 460.746772a283.24761 283.24761 0 0 0 48.459229 23.717721h1.194418a26.106557 26.106557 0 0 1 14.674274 13.650487l1.194417 2.388836a40.098306 40.098306 0 0 1 1.53568 6.825243v4.777671a35.491267 35.491267 0 0 1-1.365048 9.214079v2.388835a27.130343 27.130343 0 0 1-15.868692 16.209953c-71.153165 26.789081-133.262881 82.414817-185.987888 154.93303a1045.62732 1045.62732 0 0 0-144.01264 304.917758 34.126218 34.126218 0 0 1-23.205828 22.352673 44.022821 44.022821 0 0 1-12.45607 1.876942 47.606074 47.606074 0 0 1-10.749759-1.365049h-1.70631a34.126218 34.126218 0 0 1-22.693935-20.646362v-1.706311A1045.62732 1045.62732 0 0 0 242.65891 694.681996c-52.554376-72.347582-114.32283-127.461424-184.964102-153.567981H56.671021a25.424032 25.424032 0 0 1-15.015535-14.674274l-1.706311-2.559466A40.780831 40.780831 0 0 1 37.901602 511.936099a30.031072 30.031072 0 0 1 1.023786-7.84903l1.023787-4.265778a25.765295 25.765295 0 0 1 15.868691-15.69806c71.153165-26.789081 133.09225-82.414817 185.987888-155.274292a1039.31397 1039.31397 0 0 0 144.01264-304.576496A34.126218 34.126218 0 0 1 409.194854 1.91977a40.268937 40.268937 0 0 1 24.570877 0 34.979373 34.979373 0 0 1 22.864566 19.963838v2.388835q8.531555 27.642237 17.916264 54.77258c6.483981 17.063109 12.967963 35.320636 19.963838 52.213114z m248.268236 686.278244A216.01896 216.01896 0 0 1 788.678398 865.142455a362.079173 362.079173 0 0 1 38.562626 68.252436 371.634514 371.634514 0 0 1 38.562627-68.252436 228.47503 228.47503 0 0 1 45.38787-47.606074 237.177215 237.177215 0 0 1-45.38787-47.606074 367.709999 367.709999 0 0 1-38.562627-68.252436 363.614853 363.614853 0 0 1-38.562626 68.252436 227.963136 227.963136 0 0 1-45.38787 47.606074z m4.095146 77.466515a143.500747 143.500747 0 0 0-60.915299-51.189327 26.106557 26.106557 0 0 1-14.674274-12.967963l-1.023786-2.388835a37.709471 37.709471 0 0 1-1.706311-10.067235 27.983499 27.983499 0 0 1 1.53568-9.043447 25.935926 25.935926 0 0 1 15.868691-17.063109 140.429387 140.429387 0 0 0 61.427192-51.189327 373.682087 373.682087 0 0 0 51.189327-108.521374 29.007285 29.007285 0 0 1 17.063109-18.257526h2.730098a23.717722 23.717722 0 0 1 9.214079-1.53568 32.761169 32.761169 0 0 1 9.555341 1.53568 27.812868 27.812868 0 0 1 18.086895 17.063109 373.340825 373.340825 0 0 0 51.189327 108.521373 145.377689 145.377689 0 0 0 60.744668 51.189327 24.229615 24.229615 0 0 1 15.52743 15.527429v1.023787a27.983499 27.983499 0 0 1 1.53568 9.043448 26.959712 26.959712 0 0 1-1.876942 10.067234 20.646362 20.646362 0 0 1-4.777671 7.84903 26.61845 26.61845 0 0 1-10.237865 7.166506 147.425262 147.425262 0 0 0-62.109717 52.383744 369.245679 369.245679 0 0 0-51.189327 108.521374 27.812868 27.812868 0 0 1-18.940051 18.940051 37.709471 37.709471 0 0 1-9.214079 1.365048 35.491267 35.491267 0 0 1-9.214079-1.365048 27.642237 27.642237 0 0 1-18.940051-19.110682 373.682087 373.682087 0 0 0-51.189327-108.180111z" fill="currentColor"></path><path d="M470.792677 301.889227a254.240324 254.240324 0 0 1 52.383745 53.919424 416.33986 416.33986 0 0 1 44.534714 81.39103 416.851753 416.851753 0 0 1 44.705346-81.39103 249.633285 249.633285 0 0 1 52.213113-53.919424 242.978672 242.978672 0 0 1-52.213113-54.090056 418.899326 418.899326 0 0 1-44.705346-81.049768 418.387433 418.387433 0 0 1-44.534714 81.049768 247.415081 247.415081 0 0 1-52.383745 54.090056zM481.542436 385.669092a159.369438 159.369438 0 0 0-68.252436-57.84394 24.912139 24.912139 0 0 1-15.527429-15.186167 28.324761 28.324761 0 0 1-1.876942-9.896603 29.519179 29.519179 0 0 1 2.047573-11.091021 24.912139 24.912139 0 0 1 15.356798-14.503642 160.393225 160.393225 0 0 0 68.252436-58.355833 411.73282 411.73282 0 0 0 56.478891-119.441763v-1.706311a28.836654 28.836654 0 0 1 17.063109-17.063109l3.24199-1.365049a42.657773 42.657773 0 0 1 9.214079-1.194417 40.098306 40.098306 0 0 1 9.214079 1.194417 28.15413 28.15413 0 0 1 19.451944 18.940051 414.121656 414.121656 0 0 0 56.820153 120.46555 161.075749 161.075749 0 0 0 69.446854 58.697095 26.447819 26.447819 0 0 1 14.674274 14.674274l1.194417 4.265777a19.451944 19.451944 0 0 1 0 6.31335 36.344422 36.344422 0 0 1-1.023786 7.166506l-0.853156 2.388835a21.84078 21.84078 0 0 1-4.436408 8.019661 23.54709 23.54709 0 0 1-10.92039 7.849031 162.611429 162.611429 0 0 0-69.446853 58.355832 416.169229 416.169229 0 0 0-56.478891 119.441763v1.365049a29.177916 29.177916 0 0 1-19.963838 18.940051 27.471606 27.471606 0 0 1-9.214079 1.365049 27.983499 27.983499 0 0 1-9.214079-1.365049 29.007285 29.007285 0 0 1-18.598788-17.063109l-1.023787-2.559466A418.387433 418.387433 0 0 0 481.542436 385.669092z" fill="currentColor"></path></svg>';
    setOption(wrapper, [], 'founderOption', founderSvg, '创始用户颜色的用户名', 'bling-founder', 'founder');
    var danmukuBoxSvg = "<svg xmlns=\"http://www.w3.org/2000/svg\" data-pointer=\"none\" viewBox=\"0 0 4 14\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M.5 2C.5 1.15 1.15.5 2 .5s1.5.65 1.5 1.5S2.85 3.5 2 3.5.5 2.85.5 2Zm0 5c0-.85.65-1.5 1.5-1.5s1.5.65 1.5 1.5S2.85 8.5 2 8.5.5 7.85.5 7Zm0 5c0-.85.65-1.5 1.5-1.5s1.5.65 1.5 1.5-.65 1.5-1.5 1.5S.5 12.85.5 12Z\"></path></svg>";
    setOption(wrapper, [], 'danmukuBoxOption', danmukuBoxSvg, '隐藏弹幕列表', 'bling-hide', 'danmukuBoxHide');
    background();
    document.querySelector('body').appendChild(wrapper);
};
function setOption(wrapper, elements, id, innerHTML, title, elementClass, _key, wheelSelectors) {
    if (wheelSelectors === void 0) { wheelSelectors = ''; }
    var option = document.createElement("div");
    option.className = blingOptionClass;
    option.id = id;
    option.innerHTML = innerHTML;
    option.title = title;
    optionSwitch(elements, option, elementClass, config[_key]);
    option.onclick = function () {
        config[_key] = !config[_key];
        if (wheelSelectors) {
            var _elements = document.querySelectorAll(wheelSelectors);
            optionSwitch(_elements, option, elementClass, config[_key]);
        }
        else {
            optionSwitch(elements, option, elementClass, config[_key]);
        }
        localStorage.setItem(key, JSON.stringify(config));
        try {
            browser.storage.local.set({ 'bling-config': JSON.stringify(config) }).then(function () {
            }, function () {
                console.error("error");
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    wrapper.appendChild(option);
}
function optionClassSwitch(option, flag) {
    if (flag) {
        option.classList.add(blingOptionSelectedClass);
    }
    else {
        option.classList.remove(blingOptionSelectedClass);
    }
}
function elementsClassSwitch(elements, elementClass, flag) {
    elements.forEach(function (element) {
        if (flag) {
            if (element === null || element === void 0 ? void 0 : element.classList.contains(elementClass)) {
            }
            else {
                element === null || element === void 0 ? void 0 : element.classList.add(elementClass);
            }
        }
        else {
            if (element === null || element === void 0 ? void 0 : element.classList.contains(elementClass)) {
                element === null || element === void 0 ? void 0 : element.classList.remove(elementClass);
            }
        }
    });
}
function optionSwitch(elements, option, elementClass, flag) {
    optionClassSwitch(option, flag);
    elementsClassSwitch(elements, elementClass, flag);
}
function background() {
    if (location.href.match(/[\s\S]+com\/video\//)) {
    }
    else {
        var body = document.querySelector('body');
        body.onwheel = function () {
            console.log('wheel');
            var singleCard = document.querySelectorAll('.floor-single-card');
            elementsClassSwitch(singleCard, 'bling-single-hide', config.singleCardHidden);
            var liveCard = document.querySelectorAll('.bili-live-card');
            elementsClassSwitch(liveCard, 'bling-single-hide', config.liveHidden);
        };
    }
    var time0 = 0;
    var interval = setInterval(function () {
        if (time0 > times) {
            clearInterval(interval);
        }
        var singleCard = document.querySelectorAll('.floor-single-card');
        if (singleCard.length > 4) {
            elementsClassSwitch(singleCard, 'bling-single-hide', config.singleCardHidden);
            clearInterval(interval);
        }
        console.log("定时已执行次数:", time0++);
    }, timeout);
    var time1 = 0;
    var interval1 = setInterval(function () {
        if (time1 > times) {
            clearInterval(interval1);
        }
        var uploads = document.querySelectorAll('.right-entry-item');
        elementsClassSwitch(uploads, 'bling-hide', config.uploadHidden);
    }, timeout);
    var time2 = 0;
    var interval2 = setInterval(function () {
        if (time2 > times) {
            clearInterval(interval2);
        }
        var vip = document.querySelector('.vip-wrap');
        elementsClassSwitch([vip], 'bling-hide', config.vipHidden);
    }, timeout);
    var time3 = 0;
    var noUploadClass = 'bling-no-upload';
    var values = ['动态', '收藏', '历史'];
    var interval3 = setInterval(function () {
        if (time3 > times) {
            clearInterval(interval3);
        }
        var elements = [];
        document.querySelectorAll('.right-entry .v-popover-wrap').forEach(function (element, index) {
            var _a;
            var text = (_a = element.querySelector('.right-entry__outside span')) === null || _a === void 0 ? void 0 : _a.innerHTML.trim();
            if (values.indexOf(text) >= 0) {
                element.classList.add("bling-no-upload-".concat(index));
                elements.push(element);
            }
        });
        elementsClassSwitch(elements, noUploadClass, config.uploadHidden);
    }, timeout);
    var time4 = 0;
    var interval4 = setInterval(function () {
        if (time4 > times) {
            clearInterval(interval4);
        }
        if (document.querySelector('.upinfo-btn-panel .new-charge-btn') === null && document.querySelector('.upinfo-btn-panel .follow-btn') !== null) {
            document.querySelector('.upinfo-btn-panel .follow-btn').classList.add('bling-elastic-follow-btn');
        }
    }, timeout);
    var time5 = 0;
    var interval5 = setInterval(function () {
        if (time5 > times) {
            clearInterval(interval5);
        }
        var nickname = document.querySelector('.nickname-item');
        var info__name = document.querySelector('.info__name');
        if (nickname !== null) {
            if (config.founder) {
                nickname.classList.add('bling-founder');
            }
            else {
                nickname.classList.remove('bling-founder');
            }
        }
        if (info__name !== null) {
            if (config.founder) {
                info__name.classList.add('bling-founder');
            }
            else {
                info__name.classList.remove('bling-founder');
            }
        }
    }, timeout);
    var time6 = 0;
    var interval6 = setInterval(function () {
        if (time6 > times) {
            clearInterval(interval6);
        }
        var danmukuBox = document.querySelector('#danmukuBox');
        if (danmukuBox) {
            if (config.danmukuBoxHide) {
                danmukuBox.classList.add('bling-hide');
            }
            else {
                danmukuBox.classList.remove('bling-hide');
            }
        }
        else {
            clearInterval(interval6);
        }
    }, timeout);
}
//# sourceMappingURL=content.js.map