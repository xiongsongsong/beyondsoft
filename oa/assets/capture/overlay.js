/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午5:51
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {

    KISSY.config({
        packages: [
            {
                name: "gallery",
                tag: "20111224",
                path: "http://a.tbcdn.cn/s/kissy",
                charset: "utf-8"
            }
        ]
    });

    KISSY.use("ua,event,node,overlay,button", function (S, UA, Event, Node, O, B) {
        var dialog = new O.Dialog({
            elCls: 'my-container',//Please go to capture.css
            elStyle: {
                position: UA.ie == 6 ? "absolute" : "fixed"
            },
            bodyContent: S.DOM.get('div.capture-faild-tpl').innerHTML,
            headerContent: '<h2><span>Capture Failed</span></h2>',
            closable: false,
            //mask: true,
            align: {
                node: S.get('#flex-grid-container'),
                points: ['cc', 'cc']
            }
        });

        function show() {
            dialog.show();
        }

        S.Event.on(window, 'scroll', function (ev) {
            dialog.set("align", {
                node: S.get('#flex-grid-container'),
                points: ['cc', 'cc']
            });
        })

        $(document.body).on('click', '.show,.hide,.change,a.title', function (ev) {

            ev.preventDefault();
            var $this = $(this);

            if (!$this.hasClass('triggers')) return;

            if ($this.hasClass('show')) {
                show();
            }

            if ($this.hasClass('hide')) {
                dialog.hide();
            }

            if ($this.hasClass('change')) {
                dialog.set('bodyContent', (new Date()).toLocaleString() + '<br>' + Math.random());
                show();
            }

            if ($this.hasClass('title')) {
                dialog.set('headerContent', '<h2><span>' + Math.random() + '</span></h2>');
                show();
            }

        })

    });

})