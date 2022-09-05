var title = '<span class="icon icon-ie"></span><span class="visually-hidden">ie</span><span class="icon icon-note-warning"></span><span class="visually-hidden">ie</span>';
var subTitle = '<div class="bc-head-txt-label bc-head-icon-ie">Internet Explorer</div><div class="bc-head-icon-symbol icon icon-ie"></div>';
var it = setInterval(function () {
    var $table = document.getElementsByClassName('bc-table')[0];
    if ($table) {
        clearInterval(it);
        var $theadTrs = $table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
        var $titleTr = $theadTrs[0];
        var $subTitleTr = $theadTrs[1];
        var titleNode = document.createElement('th');
        titleNode.className = 'bc-platform bc-platform-ie';
        titleNode.title = 'ie(Powered by MDN-BCD-IE and MDN bc data.)';
        titleNode.innerHTML = title;
        $titleTr.appendChild(titleNode);
        var subTitleNode = document.createElement('th');
        subTitleNode.className = 'bc-browser bc-browser-ie';
        subTitleNode.innerHTML = subTitle;
        $subTitleTr.appendChild(subTitleNode);
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
                        var contentNode = document.createElement('td');
                        contentNode.className = 'bc-support bc-browser-ie bc-supports-yes bc-has-history';
                        var clazz = 'bc-level-yes icon icon-yes';
                        var supportLevel = 'Full support';
                        var supportVersion = '';
                        var icons = '';
                        if (support.partial_implementation) {
                            clazz = 'bc-level-partial icon icon-partial';
                            supportLevel = 'Partial support';
                            supportVersion = "<span class=\"bc-version-label\" title=\"Released " + support.release_date + "\">" + support.version_added + "</span>";
                            icons = "<div class=\"bc-icons\"><abbr class=\"only-icon\" title=\"" + support.notes + "\"><span>more</span><i class=\"icon icon-more\"></i></abbr></div>";
                        }
                        if (support.version_added === false) {
                            clazz = 'bc-level-no icon icon-no';
                            supportLevel = 'No support';
                            supportVersion = "<span class=\"bc-version-label\" title=\"" + supportLevel + "\"></span>";
                        }
                        else {
                            supportVersion = "<span class=\"bc-version-label\" title=\"Released " + support.release_date + "\">" + support.version_added + "</span>";
                        }
                        var abbr = "<abbr class=\"" + clazz + "\" title=\"" + supportLevel + "\"><span class=\"bc-support-level\">" + supportLevel + "</span></abbr>";
                        var content = "<button type=\"button\" title=\"Toggle history\"><div class=\"bcd-cell-text-wrapper\"><div class=\"bcd-cell-icons\"><span class=\"icon-wrap\">" + abbr + "</span></div><div class=\"bcd-cell-text-copy\"><span class=\"bc-browser-name\">Internet Explorer</span>" + supportVersion + "</div>" + icons + "</div></button>";
                        contentNode.innerHTML = content;
                        $tbodyTr.appendChild(contentNode);
                    }
                    else {
                        for (var key in bcd.data) {
                            if (Object.prototype.hasOwnProperty.call(bcd.data, key) && key !== '__compat') {
                                var element = bcd.data[key];
                                console.log(key, element.__compat.support['ie'][0]);
                            }
                        }
                    }
                }
            }
        };
        xhr_1.send(null);
    }
}, 1000);
//# sourceMappingURL=content.js.map