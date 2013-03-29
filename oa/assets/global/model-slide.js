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
        if ($delegateTarget.data('scrolling')) return;
        var wrapper = $delegateTarget.find('div.item-wrapper');
        $delegateTarget.data('scrolling', true);
        wrapper.slideToggle(400, function () {
            $delegateTarget.data('scrolling', false);
            $delegateTarget.toggleClass('slideup', wrapper.is(':visible'))
        });
    })

});