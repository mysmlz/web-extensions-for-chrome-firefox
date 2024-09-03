const title: string = '<span class="icon icon-ie"></span><span class="visually-hidden">ie</span><span class="icon icon-note-warning"></span><span class="visually-hidden">ie</span>';
const subTitle: string = '<div class="bc-head-txt-label bc-head-icon-ie">Internet Explorer</div><div class="bc-head-icon-symbol icon icon-ie"></div>';

let it: number = setInterval(() => {
    const $table: HTMLTableElement = <HTMLTableElement>document.getElementsByClassName('bc-table')[0];
    if ($table) {
        clearInterval(it);
        const $theadTrs: HTMLCollectionOf<HTMLTableRowElement> = $table.getElementsByTagName('thead')[0].getElementsByTagName('tr');
        const $titleTr: HTMLTableRowElement = $theadTrs[0];
        const $subTitleTr: HTMLTableRowElement = $theadTrs[1];
        let titleNode: HTMLTableCellElement = document.createElement('th');
        titleNode.className = 'bc-platform bc-platform-ie';
        titleNode.title = 'ie(Powered by MDN-BCD-IE and MDN bc data.)';
        titleNode.innerHTML = title;
        $titleTr.appendChild(titleNode);
        let subTitleNode: HTMLTableCellElement = document.createElement('th');
        subTitleNode.className = 'bc-browser bc-browser-ie';
        subTitleNode.innerHTML = subTitle;
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
                        let contentNode: HTMLTableCellElement = document.createElement('td');
                        contentNode.className = 'bc-support bc-browser-ie bc-supports-yes bc-has-history';
                        let clazz: string = 'bc-level-yes icon icon-yes';
                        let supportLevel: string = 'Full support';
                        let supportVersion: string = '';
                        let icons: string = '';
                        if (support.partial_implementation) {
                            clazz = 'bc-level-partial icon icon-partial';
                            supportLevel = 'Partial support';
                            supportVersion = `<span class="bc-version-label" title="Released ${support.release_date}">${support.version_added}</span>`;
                            icons = `<div class="bc-icons"><abbr class="only-icon" title="${support.notes}"><span>more</span><i class="icon icon-more"></i></abbr></div>`;
                        }
                        if (support.version_added === false) {
                            clazz = 'bc-level-no icon icon-no';
                            supportLevel = 'No support';
                            supportVersion = `<span class="bc-version-label" title="${supportLevel}"></span>`;
                        } else {
                            supportVersion = `<span class="bc-version-label" title="Released ${support.release_date}">${support.version_added}</span>`;
                        }
                        let abbr: string = `<abbr class="${clazz}" title="${supportLevel}"><span class="bc-support-level">${supportLevel}</span></abbr>`;
                        const content: string = `<button type="button" title="Toggle history"><div class="bcd-cell-text-wrapper"><div class="bcd-cell-icons"><span class="icon-wrap">${abbr}</span></div><div class="bcd-cell-text-copy"><span class="bc-browser-name">Internet Explorer</span>${supportVersion}</div>${icons}</div></button>`;
                        contentNode.innerHTML = content;
                        $tbodyTr.appendChild(contentNode);
                    } else {
                        for (const key in bcd.data) {
                            if (Object.prototype.hasOwnProperty.call(bcd.data, key) && key !== '__compat') {
                                const element: CompatInner = bcd.data[key];
                                console.log(key, element.__compat.support['ie'][0]);
                            }
                        }
                    }
                }
            }
        }
        xhr.send(null);
    }
}, 1000);

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
