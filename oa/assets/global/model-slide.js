/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-3-29
 * Time: 下午3:30
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {

    $('div.unit').on('click', 'h1.title', function (ev) {
        var $delegateTarget = $(ev.delegateTarget);
        var wrapper = $delegateTarget.find('div.item-wrapper');

        if (wrapper.is(":animated")) return;

        $delegateTarget.toggleClass('show')

        if ($delegateTarget.hasClass('show')) {
            wrapper.slideUp(400);
        } else {
            wrapper.slideDown(400);
        }
    })
});
