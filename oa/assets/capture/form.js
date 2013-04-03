/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午2:22
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {

    var $formObj = $(document.forms['capture']);

    $formObj.on('submit', function (ev) {
        alert(KISSY.JSON.stringify(KISSY.unparam($formObj.serialize()), undefined, '    '));
        ev.preventDefault();
    });

});