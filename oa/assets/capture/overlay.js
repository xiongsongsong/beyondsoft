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

    KISSY.use("ua,event,node,overlay,button,component/plugin/drag", function (S, UA, Event, Node, O, B, DragPlugin) {
        var dialog = new O.Dialog({
            elCls: 'my-container',//Please go to capture.css
            elStyle: {
                position: UA.ie == 6 ? "absolute" : "fixed"
            },
            bodyContent: S.DOM.get('div.capture-faild-tpl').innerHTML,
            headerContent: '<h2><span>Capture Failed</span></h2>',
            closable: false,
            //mask: true,
            plugins: [
                new DragPlugin({
                    handlers: ['.ks-stdmod-header']
                })
            ],
            align: {
                points: ['cc', 'cc']
            }
        });

        function show() {
            dialog.show();
            center();
        }


        function center() {
            if (dialog.get("visible")) {
                dialog.center();
            }
        }

        $(document.body).on('click', '.show,.hide,.change,a.title', function (ev) {

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

        //for ie6
        if ('undefined' == typeof(document.body.style.maxHeight)) {
            Event.on(window, "scroll", center);
        }
    });

})