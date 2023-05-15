function restoreOptions() {
    chrome.storage.sync.get(['baidu', 'bing', 'sites'], function (item) {
        console.log(item);
        document.querySelector('[name="baidu"]').checked = item.baidu;
        document.querySelector('[name="bing"]').checked = item.bing;
        item.sites.forEach((site) => {
            const node = document.createElement('li');
            node.textContent = site;
            document.querySelector('#sites').appendChild(node);
        });
    });
}

function addSite() {
    const site = document.querySelector('[name="site"]').value;
    if (site) {
        console.log(site);
        chrome.storage.sync.get(['sites'], function (item) {
            let sites = item.sites;
            if (!sites) {
                sites = [];
            }
            sites.push(site);
            const node = document.createElement('li');
            node.textContent = site;
            document.querySelector('#sites').appendChild(node);
            chrome.storage.sync.set({ sites: sites });
        });
    }
}

function saveOptions() {
    const baidu = document.querySelector('[name="baidu"]').checked;
    const bing = document.querySelector('[name="bing"]').checked;
    chrome.storage.sync.set({ baidu: baidu, bing: bing });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
window.onload = () => {
    document.querySelector('#save').addEventListener('click', saveOptions);
    document.querySelector('#add').addEventListener('click', addSite);
};
