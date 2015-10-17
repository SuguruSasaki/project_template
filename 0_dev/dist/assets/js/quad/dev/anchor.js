$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     Anchor.js
     @author suguru.sasaki@quad.co.jp
     @date  2015.10.16
     @version 1.0.0

     アンカーナビゲーション機能を実装します。
     jqueryとvelocity.jsはあらかじめHTMLに関連付けてください。

    */


    // 移動速度
    var duration = 600; //ms

    /**
     アンカー機能を実装
     */
     if($('.js-anchor-nav').length){
        $('.js-anchor-nav').each(setupAnchorNavigation);
     }

     /**
     * スクロール処理、hrefから移動先を取得し移動します。
     *
     * @param key
     * @param value
     */
    function setupAnchorNavigation(key, value){
        $(value).click(function(e){
            e.preventDefault();
            var href = $(this).attr("href");
            var target = $(href === "#" || href === "" ? 'html' : href);
            target.velocity("scroll", { duration: duration, easing: "ease" });
            return false;
        });
    }
});
