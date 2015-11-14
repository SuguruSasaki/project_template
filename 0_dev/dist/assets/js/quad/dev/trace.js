/**
 * trace
 * console.logのラッピング
 *
 * warn error info debugも実装
 *
 * @author  suguru.sasaki@quad.co.jp
 * @date    2015.11.01
 * @version 1.0.0
 *
 */


// IE対応 console.logをIEではエラーにならないようにする設定
// 関数オブジェクを生成する。
(function () {
    if (typeof window.console === "undefined") {
        window.console = {}
    }
    if (typeof window.console.log !== "function") {
        window.console.log = function () {}
    }
})();


// trace, warn error info debugを実装
var methods = ['trace', 'warn', 'error', 'info', 'debug'];
for(var i in methods){
    (function(m){
        if(console[m]){
            window[m] = console[m].bind(console);
        }
        else {
            window[m] = trace;
        }
    })(methods[i])
}


