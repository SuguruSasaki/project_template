$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     AlignHeight.js
     @author suguru.sasaki@quad.co.jp
     @date  2015.10.16
     @version 1.0.1

     カラムの高さ整頓クラス。
    */

    // DOM探索の大元
    var origin = $('.js-align-height');
    var _this = this;

    // デバイスサイズ設定
    var device_xs = 768;
    var device_sm = 992;
    var device_md = 1200;


    // イメージ要素をもつか調べる
    origin.each(function(key, value){
        var tmp = $(value).find('img');
        if(tmp[0]){
            // 画像を内包している場合は、読み込み完了後実行する
            module.ImageManager.watch(tmp, _this, calcElement, value);
        }
        else {
            // 高さ揃え実行
            calcElement(value);
        }
    });

    // リサイズ処理
    $(window).resize(function(){
        origin.each(function(key, value){
            calcElement(value);
        });
    });

    /**
     * 高さを制御する
     * @param value
     */
    function calcElement(value){
        var maxHeight = 0;
        var target = $(value);

        target.each(function(key, element){
            $('.js-align-item', element).each(function(key, value){
                $(value).css({height: "auto"});
            });
        });

        target.each(function(key, element){
            $('.js-align-item', element).each(function(key, value){
                var h = $(value).height();
                if(maxHeight < h ){
                    maxHeight = h;
                }
            });
        });

        target.each(function(key, element){
            $('.js-align-item', element).each(function(key, value){
                if($(this).hasClass('js-align-xs-ignore')){
                    if($(window).width() < device_xs ){
                        $(value).css({height: "auto"});
                    }
                    else {
                        $(value).css({height: maxHeight});
                    }
                }
                else {
                    $(value).css({height: maxHeight});
                }
            });
        });
    }

});
