var title = '<span class="icon icon-ie"></span><span class="visually-hidden">ie</span><span class="icon icon-note-warning"></span><span class="visually-hidden">ie</span>';
var subTitle = '<div class="bc-head-txt-label bc-head-icon-ie">Internet Explorer</div><div class="bc-head-icon-symbol icon icon-ie"></div>';
var _title;
var lang = navigator.language;
if (lang.toLowerCase() === 'zh-cn') {
    _title = 'ie(由MDN-BCD-IE和MDN bc data驱动.)';
}
else if (lang.toLowerCase() === 'zh-tw' || lang.toLowerCase() === 'zh-hk') {
    _title = 'ie(由MDN-BCD-IE和MDN bc數據支持.)';
}
else {
    _title = 'ie(Powered by MDN-BCD-IE and MDN bc data.)';
}
var it = setInterval(function () {
    var $table = document.getElementsByClassName('bc-table')[0];
    if ($table) {
        clearInterval(it);
        var $theadTrs = $table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
        var $titleTr = $theadTrs[0];
        var $subTitleTr = $theadTrs[1];
        var titleNode_1 = simpleCreateElement('th', {
            className: 'bc-platform bc-platform-ie',
            title: _title
        });
        var titleDatas = [{ className: 'icon icon-ie' }, {
                className: 'visually-hidden',
                textContent: 'ie'
            }, { className: 'icon icon-note-warning' }, { className: 'visually-hidden', textContent: 'ie' }];
        titleDatas.forEach(function (data) { return titleNode_1.appendChild(simpleCreateElement('span', data)); });
        $titleTr.appendChild(titleNode_1);
        var subTitleNode_1 = simpleCreateElement('th', { className: 'bc-browser bc-browser-ie' });
        var subData = [{
                className: 'bc-head-txt-label bc-head-icon-ie',
                textContent: 'Internet Explorer'
            }, { className: 'bc-head-icon-symbol icon icon-ie' }];
        subData.forEach(function (data) { return subTitleNode_1.appendChild(simpleCreateElement('div', data)); });
        $subTitleTr.appendChild(subTitleNode_1);
        var xhr_1 = new XMLHttpRequest();
        var _href = location.href;
        var index = _href.indexOf('#');
        if (index > 0) {
            _href = _href.substring(0, index);
        }
        xhr_1.open('get', _href + "/bcd.json");
        xhr_1.onreadystatechange = function () {
            if (xhr_1.readyState === 4) {
                if (xhr_1.status === 200) {
                    var bcd = JSON.parse(xhr_1.responseText);
                    var _count = 0;
                    for (var key in bcd.data) {
                        if (Object.prototype.hasOwnProperty.call(bcd.data, key)) {
                            _count++;
                        }
                    }
                    if (_count === 1) {
                        var support = bcd.data.__compat.support['ie'][0];
                        var $tbodyTr = $table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0];
                        _create(support, $tbodyTr);
                    }
                    else {
                        var _index = 0;
                        for (var key in bcd.data) {
                            if (Object.prototype.hasOwnProperty.call(bcd.data, key)) {
                                var element = bcd.data[key];
                                var support = void 0;
                                if (key === '__compat') {
                                    support = element.support['ie'][0];
                                    var $tbodyTr = $table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[_index];
                                    _create(support, $tbodyTr);
                                    _index++;
                                }
                                else {
                                    for (var k in element) {
                                        var $tbodyTr = $table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[_index];
                                        if (k === '__compat') {
                                            support = element.__compat.support['ie'][0];
                                        }
                                        else {
                                            support = element[k].__compat.support['ie'][0];
                                        }
                                        _create(support, $tbodyTr);
                                        _index++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        xhr_1.send(null);
    }
}, 1000);
function _create(support, $tbodyTr) {
    var contentNode = simpleCreateElement('td', { className: 'bc-support bc-browser-ie bc-supports-yes bc-has-history' });
    var clazz = 'bc-level-yes icon icon-yes';
    var supportLevel = 'Full support';
    var $supportVersion = document.createElement('span');
    var $icons = document.createElement('div');
    if (support.partial_implementation) {
        clazz = 'bc-level-partial icon icon-partial';
        supportLevel = 'Partial support';
        var _supportVersionData = {
            className: 'bc-version-label',
            title: "Released " + support.release_date,
            textContent: "" + support.version_added
        };
        setElementOptions($supportVersion, _supportVersionData);
        setElementOptions($icons, { className: 'bc-icons' });
        var $abbr = simpleCreateElement('abbr', {
            className: 'only-icon',
            title: "" + support.notes
        });
        var $span = simpleCreateElement('span', { textContent: 'more' });
        var $i = simpleCreateElement('i', { className: 'icon icon-more' });
        $abbr.appendChild($span);
        $abbr.appendChild($i);
        $icons.appendChild($abbr);
    }
    if (support.version_added === false) {
        clazz = 'bc-level-no icon icon-no';
        supportLevel = 'No support';
        $supportVersion.title = "" + supportLevel;
    }
    else {
        var _supportVersionData = {
            className: 'bc-version-label',
            title: "Released " + support.release_date,
            textContent: "" + support.version_added
        };
        setElementOptions($supportVersion, _supportVersionData);
    }
    var _$abbr = document.createElement('abbr');
    var _abbrData = {
        className: "" + clazz,
        title: "" + supportLevel
    };
    setElementOptions(_$abbr, _abbrData);
    var bcSupportLevelData = {
        className: 'bc-support-level',
        textContent: "" + supportLevel
    };
    var $bcSupportLevel = simpleCreateElement('span', bcSupportLevelData);
    _$abbr.appendChild($bcSupportLevel);
    var $btn = simpleCreateElement('button', { title: 'Toggle history' });
    $btn.type = 'button';
    var $bcdCellTextWrapper = simpleCreateElement('div', { className: 'bcd-cell-text-wrapper' });
    var $bcdCellIcons = simpleCreateElement('div', { className: 'bcd-cell-icons' });
    var $iconWrap = simpleCreateElement('span', { className: 'icon-wrap' });
    $iconWrap.appendChild(_$abbr);
    $bcdCellIcons.appendChild($iconWrap);
    $bcdCellTextWrapper.appendChild($bcdCellIcons);
    var $bcdCellTextCopy = simpleCreateElement('div', { className: 'bcd-cell-text-copy' });
    var $bcBrowserName = simpleCreateElement('span', {
        className: 'bc-browser-name',
        textContent: 'Internet Explorer'
    });
    $bcdCellTextCopy.appendChild($bcBrowserName);
    $bcdCellTextCopy.appendChild($supportVersion);
    $bcdCellTextWrapper.appendChild($bcdCellTextCopy);
    $btn.appendChild($bcdCellTextWrapper);
    $btn.appendChild($icons);
    contentNode.appendChild($btn);
    $tbodyTr.appendChild(contentNode);
}
function simpleCreateElement(tagName, options) {
    var element = document.createElement(tagName);
    setElementOptions(element, options);
    return element;
}
function setElementOptions(element, options) {
    if (options) {
        var className = options.className, title_1 = options.title, textContent = options.textContent;
        if (className) {
            element.className = className;
        }
        if (title_1) {
            element.title = title_1;
        }
        if (textContent) {
            element.textContent = textContent;
        }
    }
}
//# sourceMappingURL=content.js.map