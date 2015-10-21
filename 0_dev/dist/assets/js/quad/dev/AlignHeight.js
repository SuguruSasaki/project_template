$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     AlignHeight.js
     @author suguru.sasaki@quad.co.jp
     @date  2015.10.16
     @version 1.0.0

     カラムの高さ整頓クラス。
    */

    // DOM探索の大元
    var origin = $('.js-align-height');
    var _this = this;

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

        target.children().each(function(key, element){
            $('.js-align-item', element).css({height: "auto"});
        });

        target.children().each(function(key, element){
            var h = $('.js-align-item', $(element)).height();
            if(maxHeight < h ){
                maxHeight = h;
            }
        });

        target.children().each(function(key, element){
            $('.js-align-item', element).css({height: maxHeight});
        });
    }

});
