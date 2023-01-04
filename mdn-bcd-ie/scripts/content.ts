const title: string = '<span class="icon icon-ie"></span><span class="visually-hidden">ie</span><span class="icon icon-note-warning"></span><span class="visually-hidden">ie</span>';
const subTitle: string = '<div class="bc-head-txt-label bc-head-icon-ie">Internet Explorer</div><div class="bc-head-icon-symbol icon icon-ie"></div>';

let it: number = setInterval(() => {
    const $table: HTMLTableElement = <HTMLTableElement>document.getElementsByClassName('bc-table')[0];
    if ($table) {
        clearInterval(it);
        const $theadTrs: HTMLCollectionOf<HTMLTableRowElement> = $table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
        const $titleTr: HTMLTableRowElement = $theadTrs[0];
        const $subTitleTr: HTMLTableRowElement = $theadTrs[1];
        let titleNode: HTMLTableCellElement = simpleCreateElement('th', {
            className: 'bc-platform bc-platform-ie',
            title: 'ie(Powered by MDN-BCD-IE and MDN bc data.)'
        });
        // titleNode.innerHTML = title;
        const titleDatas: Array<SimpleElement> = [{ className: 'icon icon-ie' }, {
            className: 'visually-hidden',
            textContent: 'ie'
        }, { className: 'icon icon-note-warning' }, { className: 'visually-hidden', textContent: 'ie' }];
        titleDatas.forEach(data => titleNode.appendChild(simpleCreateElement('span', data)));
        $titleTr.appendChild(titleNode);
        let subTitleNode: HTMLTableCellElement = simpleCreateElement('th', { className: 'bc-browser bc-browser-ie' });
        // subTitleNode.className = 'bc-browser bc-browser-ie';
        const subData: Array<SimpleElement> = [{
            className: 'bc-head-txt-label bc-head-icon-ie',
            textContent: 'Internet Explorer'
        }, { className: 'bc-head-icon-symbol icon icon-ie' }];
        subData.forEach(data => subTitleNode.appendChild(simpleCreateElement('div', data)));
        // subTitleNode.innerHTML = subTitle;
        $subTitleTr.appendChild(subTitleNode);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let _href: string = location.href;
        const index: number = _href.indexOf('#')
        if (index > 0) {
            _href = _href.substring(0, index);
        }
        xhr.open('get', `${_href}/bcd.json`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const bcd: BrowserCompatibilityData = JSON.parse(xhr.responseText);

                    let _count: number = 0;
                    for (const key in bcd.data) {
                        if (Object.prototype.hasOwnProperty.call(bcd.data, key)) {
                            _count++;
                        }
                    }
                    if (_count === 1) {
                        const support: Support = (<CompatInner>bcd.data).__compat.support['ie'][0];
                        const $tbodyTr: HTMLTableRowElement = $table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0];
                        _create(support, $tbodyTr);
                    } else {
                        console.log(bcd.data);
                        let _index: number = 0;
                        for (const key in bcd.data) {
                            if (Object.prototype.hasOwnProperty.call(bcd.data, key)) {
                                const element: CompatInner | Compat = bcd.data[key];
                                let support: Support;
                                if (key === '__compat') {
                                    support = (<Compat>element).support['ie'][0];
                                    console.log(key, support);
                                } else {
                                    support = (<CompatInner>element).__compat.support['ie'][0];
                                    console.log(key, support);
                                }
                                const $tbodyTr: HTMLTableRowElement = $table.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[_index];
                                _create(support, $tbodyTr);
                                _index++;
                            }
                        }
                    }
                }
            }
        }
        xhr.send(null);
    }
}, 1000);

function _create(support: Support, $tbodyTr: HTMLTableRowElement) {
    let contentNode: HTMLTableCellElement = simpleCreateElement('td', { className: 'bc-support bc-browser-ie bc-supports-yes bc-has-history' });
    let clazz: string = 'bc-level-yes icon icon-yes';
    let supportLevel: string = 'Full support';
    // let supportVersion: string = '';
    // let icons: string = '';
    let $supportVersion: HTMLSpanElement = document.createElement('span');
    let $icons: HTMLDivElement = document.createElement('div');
    if (support.partial_implementation) {
        clazz = 'bc-level-partial icon icon-partial';
        supportLevel = 'Partial support';
        // supportVersion = `<span class="bc-version-label" title="Released ${support.release_date}">${support.version_added}</span>`;
        const _supportVersionData: SimpleElement = {
            className: 'bc-version-label',
            title: `Released ${support.release_date}`,
            textContent: `${support.version_added}`
        }
        setElementOptions($supportVersion, _supportVersionData);
        // icons = `<div class="bc-icons"><abbr class="only-icon" title="${support.notes}"><span>more</span><i class="icon icon-more"></i></abbr></div>`;
        setElementOptions($icons, { className: 'bc-icons' });
        let $abbr: HTMLElement = simpleCreateElement('abbr', {
            className: 'only-icon',
            title: `${support.notes}`
        });
        let $span: HTMLSpanElement = simpleCreateElement('span', { textContent: 'more' });
        let $i: HTMLElement = simpleCreateElement('i', { className: 'icon icon-more' });
        $abbr.appendChild($span);
        $abbr.appendChild($i);
        $icons.appendChild($abbr);
    }
    if (support.version_added === false) {
        clazz = 'bc-level-no icon icon-no';
        supportLevel = 'No support';
        // supportVersion = `<span class="bc-version-label" title="${supportLevel}"></span>`;
        $supportVersion.title = `${supportLevel}`;
    } else {
        // supportVersion = `<span class="bc-version-label" title="Released ${support.release_date}">${support.version_added}</span>`;
        const _supportVersionData: SimpleElement = {
            className: 'bc-version-label',
            title: `Released ${support.release_date}`,
            textContent: `${support.version_added}`
        }
        setElementOptions($supportVersion, _supportVersionData);
    }
    // let abbr: string = `<abbr class="${clazz}" title="${supportLevel}"><span class="bc-support-level">${supportLevel}</span></abbr>`;
    let _$abbr: HTMLElement = document.createElement('abbr');
    const _abbrData: SimpleElement = {
        className: `${clazz}`,
        title: `${supportLevel}`
    }
    setElementOptions(_$abbr, _abbrData);
    const bcSupportLevelData: SimpleElement = {
        className: 'bc-support-level',
        textContent: `${supportLevel}`
    }
    let $bcSupportLevel: HTMLSpanElement = simpleCreateElement('span', bcSupportLevelData);
    _$abbr.appendChild($bcSupportLevel);
    let $btn: HTMLButtonElement = simpleCreateElement('button', { title: 'Toggle history' });
    $btn.type = 'button';
    let $bcdCellTextWrapper: HTMLDivElement = simpleCreateElement('div', { className: 'bcd-cell-text-wrapper' });
    let $bcdCellIcons: HTMLDivElement = simpleCreateElement('div', { className: 'bcd-cell-icons' });
    let $iconWrap: HTMLSpanElement = simpleCreateElement('span', { className: 'icon-wrap' });
    $iconWrap.appendChild(_$abbr);
    $bcdCellIcons.appendChild($iconWrap);
    $bcdCellTextWrapper.appendChild($bcdCellIcons);
    let $bcdCellTextCopy: HTMLDivElement = simpleCreateElement('div', { className: 'bcd-cell-text-copy' });
    let $bcBrowserName: HTMLSpanElement = simpleCreateElement('span', {
        className: 'bc-browser-name',
        textContent: 'Internet Explorer'
    });
    $bcdCellTextCopy.appendChild($bcBrowserName);
    $bcdCellTextCopy.appendChild($supportVersion);
    $bcdCellTextWrapper.appendChild($bcdCellTextCopy);
    $btn.appendChild($bcdCellTextWrapper);
    $btn.appendChild($icons);
    // const content: string = `<button type="button" title="Toggle history">
    //     <div class="bcd-cell-text-wrapper">
    //         <div class="bcd-cell-icons">
    //             <span class="icon-wrap">${abbr}</span>
    //         </div>
    //         <div class="bcd-cell-text-copy">
    //             <span class="bc-browser-name">Internet Explorer</span>${supportVersion}
    //         </div>${icons}
    //     </div>
    // </button>`;
    // contentNode.innerHTML = content;
    contentNode.appendChild($btn);
    $tbodyTr.appendChild(contentNode);
}

function simpleCreateElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: SimpleElement): HTMLElementTagNameMap[K] {
    let element: HTMLElementTagNameMap[K] = document.createElement(tagName);
    setElementOptions(element, options);
    return element;
}

function setElementOptions(element: HTMLElement, options?: SimpleElement) {
    if (options) {
        const { className, title, textContent }: SimpleElement = options;
        if (className) {
            element.className = className;
        }
        if (title) {
            element.title = title;
        }
        if (textContent) {
            element.textContent = textContent;
        }
    }
}

interface SimpleElement {
    className?: string;
    title?: string;
    textContent?: string;
}

interface Releases {
    engine: string;
    engine_version: string;
    release_date: string;
    release_notes: string;
    status: string;
}

interface Browsers {
    accept_flag: boolean;
    accepts_webextensions: boolean;
    name: string;
    pref_url: string;
    preview_name: string;
    releases: Map<number, Releases>;
    type: string;
}

interface Flags {
    name: string;
    type: string;
}

interface Support {
    release_date?: string;
    version_added: string | boolean;
    notes?: string;
    partial_implementation?: boolean;
}

interface SupportPrev {
    flags?: Array<Flags>;
    release_date?: string;
    version_added: string | boolean;
    notes?: string;
    partial_implementation?: boolean;
}

interface Alternative {
    alternative_name: string;
    release_date: string;
    version_added: string;
}

interface Status {
    deprecated: boolean;
    experimental: boolean;
    standard_track: boolean;
}

interface Compat {
    mdn_url: string;
    source_file: string;
    spec_url: string;
    status: Status;
    support: Map<string, [Support, SupportPrev | Alternative]>
}

interface CompatInner {
    __compat: Compat;
}

interface BrowserCompatibilityData {
    browsers: Map<string, Browsers>;
    data: Map<string, CompatInner> | CompatInner;
    id: string;
    isH3: boolean;
    query: string;
    title: string;
}
