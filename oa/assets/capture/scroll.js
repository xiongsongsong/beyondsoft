/**
 * Created with JetBrains WebStorm.
 * User: 松松
 * Date: 13-4-3
 * Time: 下午2:18
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

    KISSY.use("gallery/kscroll/1.1/", function (S, Kscroll) {
        var $ = S.all,
            d = new Kscroll($("div.J-scroll"), {
                arrow: true
            });
    });
});