var cheerio = require('cheerio');
var Dealer = require('../models/dealerModel');

function parse(html) {
    $ = cheerio.load(html);
    dealers = [];
    $('div.tab-content div.dealer-cont.js-dealer').each(function(i,elem) {
        var name = $(this).find('h3 a').eq(1).text();
        var phone = $(this).find('.dealer-api-phone').text();
        var brand = $(this).find('div[title]').eq(0).attr('title');
        var address = $(this).find('div[title]').eq(1).attr('title');
        var newDealer = new Dealer({
            name: name,
            phone: phone,
            brand: brand,
            address: address,
        });
        dealers.push(newDealer);   
    });
    console.log(dealers);
    Dealer.save(dealers, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('成功写入数据库');
        }
    });
};

exports.parse = parse;

