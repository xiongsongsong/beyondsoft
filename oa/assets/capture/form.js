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

    $formObj.on('click', 'span.add', function () {
        var $this = $(this);
        var $parentTr = $this.parents('tr');
        $parentTr.prev('tr').clone().insertBefore($parentTr)

    })

    $formObj.on('click', 'span.delete', function () {
        var $this = $(this);
        if ($this.parents('table').find('tr').length <= 2) return;
        $(this).parents('tr').remove();

    })

});