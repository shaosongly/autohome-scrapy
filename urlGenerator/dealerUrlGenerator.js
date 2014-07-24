var baseUrl = 'http://dealer.autohome.com.cn/';
function urlGenerator(city,pageNum) {
    if(pageNum == 1 ) {
        return baseUrl+city+'/';
    }
    return baseUrl+city+'/0_0_0_0_'+pageNum+'.html';
};

module.exports.urlGenerator = urlGenerator;
