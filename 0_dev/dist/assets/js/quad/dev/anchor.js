$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     アンカーナビゲーション機能を実装します。
     */
     if($('.js-anchor-nav').length){
        $('.js-anchor-nav').each(setupAnchorNavigation);
     }

     /**
     *
     * @param key
     * @param value
     */
    function setupAnchorNavigation(key, value){
        $(value).click(function(e){
            e.preventDefault();
            var href = $(this).attr("href");
            var target = $(href === "#" || href === "" ? 'html' : href);
            target.velocity("scroll", { duration: 600, easing: "ease" });
            return false;
        });
    }
});
