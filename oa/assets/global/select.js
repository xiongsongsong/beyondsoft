/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午4:30
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {

    var currentInput;

    var tpl = '<div class="select-container hide" id="select-container"><div class="select-container-wrapper"></div></div>';

    var selectContainer = $('#select-container');

    if (selectContainer.length < 1) {
        $(tpl).appendTo($(document.body));
        selectContainer = $('#select-container');
    }

    $(document.body).on('click', 'b.select', function (ev) {

        var delegateTarget = $(this).parents('div.text-field');
        var offset = delegateTarget.offset();
        currentInput = delegateTarget.find('input');

        if (currentInput.length < 1) return;

        var select = currentInput.attr('data-value');
        if (!select) return;
        select = select.split(',');
        var options = '';
        for (var i = 0; i < select.length; i++) {
            options += '<div>' + select[i] + '</div>';
        }

        selectContainer.find('div.select-container-wrapper').html(options);

        selectContainer.css({
            left: offset.left,
            width: delegateTarget.width(),
            top: offset.top + delegateTarget.height() - 4
        });

        selectContainer.show();

        $(document.body).one('mousedown', hide)

    });

    function hide(ev) {
        selectContainer.hide();
    }

    selectContainer.on('click', 'div.select-container-wrapper div', function (ev) {
        var value = $.trim($(ev.target).text());
        selectContainer.hide();
        currentInput.val(value);
    });


});
