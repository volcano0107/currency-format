'use strict';

var expect = require('chai').expect;
var currencyFormat = require('../index');

describe('#currencyFormat', function() {
    it('一位数', function() {
        var result = currencyFormat(1);
        expect(result).to.equal('$1.00');
    });
    it('两位数', function() {
        var result = currencyFormat(12);
        expect(result).to.equal('$12.00');
    });
    it('五位数', function() {
        var result = currencyFormat(12345);
        expect(result).to.equal('$12,345.00');
    });
    it('自定义货币符号', function() {
        var result = currencyFormat(12345,'¥');
        expect(result).to.equal('¥12,345.00');
    });
    it('自定义保留小数位数', function() {
        var result = currencyFormat(12345,'$',1);
        expect(result).to.equal('$12,345.0');
    });
});