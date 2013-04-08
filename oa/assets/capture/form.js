/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午2:22
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {

    /* Validator DEMO */

    var formObj = document.forms['capture'];
    var $formObj = $(formObj);

    var name = formObj.elements['name'];
    var from = formObj.elements['from'];
    var duration = formObj.elements['duration'];
    var cluster = formObj.elements['cluster'];

    var validator = {
        name: function () {
            if ($.trim(name.value).length < 1) {
                $(name).parents('.text-field').addClass('error');
                $(name).parents('tr').find('p.tips').show().html('require1')
            } else {
                $(name).parents('.text-field').removeClass('error');
                $(name).parents('tr').find('p.tips').hide().html('')
            }
        }, from: function () {
            //Can not exceed the current time
            if (parseInt($(from).attr('data-time-stamp'), 10) > (new Date()).getTime()) {
                $(from).parents('.text-field').addClass('error');
                $(from).parents('tr').find('p.tips').show().html('Can not exceed the current time2')
            } else {
                $(from).parents('.text-field').removeClass('error');
                $(from).parents('tr').find('p.tips').hide().html('')
            }
        }, duration: function () {
            if ($.trim(duration.value).length < 1) {
                $(duration).parents('tr').find('p.tips').show().html('require3')
                $(duration).parents('.text-field').addClass('error');
            } else {
                $(duration).parents('.text-field').removeClass('error');
                $(duration).parents('tr').find('p.tips').hide().html('')
            }
        }, cluster: function () {
            if ($.trim(cluster.value).length < 1) {
                $(cluster).parents('.text-field').addClass('error');
                $(cluster).parents('tr').find('p.tips').show().html('require4')
            } else {
                $(cluster).parents('.text-field').removeClass('error');
                $(cluster).parents('tr').find('p.tips').hide().html('')
            }
        }
    }


    $([name, from, duration, cluster]).on('blur', function (ev) {
        if (validator[ev.target.name]) validator[ev.target.name]();
    })

    $formObj.on('submit', function (ev) {
        ev.preventDefault();

        for (var f in validator) {
            validator[f]();
        }

        if ($formObj.find('.text-field.error').length < 1) {
            $.ajax({
                url: "/upload",
                type: "get",
                data: KISSY.unparam($formObj.serialize())
            }).done(function () {
                    alert('success')
                }).error(function () {
                    alert('Error:/upload');
                });

        }
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