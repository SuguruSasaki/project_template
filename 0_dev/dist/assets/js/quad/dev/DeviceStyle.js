$(function(exports) {
    exports.psc = exports.psc || {};
    var module = exports.psc;


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
            var style_lg = $(value).data('lg-style');
            var style_md = $(value).data('md-style');
            var style_sm = $(value).data('sm-style');
            var style_xs = $(value).data('xs-style');

            var windowWidth = $(window).width(); // ウィンドウサイズ
            var style = "";

            if(style_xs){
                style = style_xs;
            }
            else if( windowWidth > $device_sp && windowWidth < $device_tb){
                if(style_sm) style = style_sm;
            }
            else if(windowWidth > $device_tb && windowWidth < $device_pc){
                if(style_md) style = style_md;
            }
            else if(windowWidth > $device_pc) {
                if(style_lg) style = style_lg;
            }

            if($(value).attr("style")){
                style = $(value).attr("style") + " "+ style;
            }
            // スタイルを設定する
            $(value).attr("style", style);
        });


    }

});