var http = require('http');
var iconv = require('iconv-lite');
var dealerParser = require('./parser/dealerParser');
var dealerUrlGenerator = require('./urlGenerator/dealerUrlGenerator');

var url = dealerUrlGenerator.urlGenerator('beijing',2);
console.log('正在抓取的url页面是：'+url);
http.get(url,function(res) {
    var size = 0;
    var chunks =[];
    res.on('data', function(chunk) {
        size += chunk.length;
        chunks.push(chunk);
    });
    res.on('end', function() {
        var data = Buffer.concat(chunks,size);
        var html = iconv.decode(data,'gbk');
        dealerParser.parse(html);
    });
});

    

