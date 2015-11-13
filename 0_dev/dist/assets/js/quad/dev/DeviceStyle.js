$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;


    /**
     * デバイスサイズによってスタイルを変更する。
     *
     * クラス名"js-style"を持つDOM要素に対して動的にスタイルを設定する
     *
     * data属性で判定
     *
     * data-xs-style
     * data-sm-style
     * data-lg-style
     *
     */

    /**
     * 初期スタイル設定
     */
    configureStyle();


    /**
     * リサイズ設定
     */
    $(window).resize(configureStyle);


    /**
     * スタイルを設定する
     */
    function configureStyle(){
        // デバイスサイズ
        var $device_pc = 1200;  // PCサイズ
        var $device_tb = 992;   // タブレットサイズ
        var $device_sp = 768;   // スマホサイズ

        $('.js-style').each(function(key, value){
            var $target  = $(value);
            var style_lg = $target.data('lg-style');
            var style_md = $target.data('md-style');
            var style_sm = $target.data('sm-style');
            var style_xs = $target.data('xs-style');

            if(!$target.data("style-origin")) {
                if($target.attr("style")){
                    $target.attr("data-style-origin", $target.attr("style"));
                }
                else {
                    $target.attr("data-style-origin", " ");
                }
            }

            var windowWidth = $(window).width(); // ウィンドウサイズ
            var style = "";

            if(style_xs){
                style = style_xs;
            }

            if( windowWidth > $device_sp){
                if(style_sm) style = style_sm;
            }

            if(windowWidth > $device_tb){
                if(style_md) style = style_md;
            }

            if(windowWidth > $device_pc) {
                if(style_lg) style = style_lg;
            }

            if($target.data("style-origin")){
                // console.log($target.data("style-origin"));
                style = $target.data("style-origin") + " "+ style;
            }
            // スタイルを設定する
            $target.attr("style", style);


        });


    }

});