/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-3-29
 * Time: 下午3:23
 * To change this template use File | Settings | File Templates.
 */



define(function (require, exports, module) {

    require('../global/model-slide');

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

    KISSY.use("gallery/kscroll/1.1/", function (S, Kscroll) {
        var $ = S.all;
        new Kscroll($("div.J-scroll"), {
            arrow: true
        });
        new Kscroll($("div.J-scroll2"), {
            arrow: true
        });
    });

});