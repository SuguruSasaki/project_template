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


    // 初回ロード判定フラグ
    var isInitialLoad = false;

    // 全て読み込み終わってから高さを調整する。
    $(window).load(function(){
      isInitialLoad = true;
      calcColumHeight();
    });

    // リサイズ処理
    $(window).resize(calcColumHeight);

    /**
     * 高さ調整
     */
    function calcColumHeight(){
        if(!isInitialLoad) return;

        // 高さを揃える
        $('.js-align-height').each(function(key, value){

            var maxHeight = 0;
            var target = $(value);

            // リセット
            target.children().each(function(key, element){
                $('.js-align-item', element).css({height: "auto"});
            });

            // 高さ検索
            target.children().each(function(key, element){
                var h = $('.js-align-item', $(element)).height();
                if(maxHeight < h ){
                    maxHeight = h;
                }
            });

            // 高さ反映
            target.children().each(function(key, element){
                $('.js-align-item', element).css({height: maxHeight});
            });
        });
    }






});
