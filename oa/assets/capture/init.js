/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午2:16
 * To change this template use File | Settings | File Templates.
 */



define(function (require, exports, module) {

    require('./form');

    require('./overlay');

    var select = require('../global/select');

    /*Fix select bug*/
    $('#detail-criterias-scroll').on('scroll', function () {
        select.hide();
    })

});