let adSelectors = [
  'iframe',
  'aside .csdn-tracking-statistics.mb8.box-shadow',
  '.recommend-right',
  '.fourth_column',
  '#dmp_ad_58',//以上为广告
  '.hide-article-box'//此为隐藏(阅读全文)
];

document.querySelectorAll(adSelectors.join(',')).forEach(item => {
  item.style.display = 'none'
});

document.getElementsByTagName('main')[0].style.width = '75%';

document.getElementById('article_content').style.height='auto';
