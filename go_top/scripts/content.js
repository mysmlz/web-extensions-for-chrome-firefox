window.onload = function () {
    var goTop = document.createElement('img');

    goTop.setAttribute('id', 'goTop');

    goTop.setAttribute('src', 'http://www.51xuediannao.com/uploads/allimg/140105/1-140105142A2-50.png');

    var style = '';
    style += 'position: fixed;';
    style += 'right: 20px;bottom: 20px;';
    style += 'width: 50px;height: 50px;';
    style += 'z-index:200000;';
    style += "cursor:pointer;"

    goTop.setAttribute('style', style);

    goTop.setAttribute('onclick', 'window.scrollTo(0, 0);');

    document.body.appendChild(goTop);
}
