var mongodb = require('./db');

function Dealer(dealer) {
    this.name = dealer.name;
    this.phone = dealer.phone;
    this.brand = dealer.brand;
    this.address = dealer.address;
};

Dealer.save = function save(dealers, callback) {
    mongodb.open(function(err,db) {
        if(err) {
            return callback(err);
        }
        db.collection('dealers',function(err,collection) {
            if(err) {
                mongodb.close();
                return callback(err);
            }
            collection.insert(dealers,{safe:true},function(err) {
                mongodb.close();
                callback(err);
            });
        });
    });
};

module.exports = Dealer;

