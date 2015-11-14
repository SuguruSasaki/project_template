$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     * Testクラス
     *
     * @author  suguru.sasaki@quad.co.jp
     * @date    2015.11.01
     * @version 1.0.0
     *
     */


    /**
     * @constructor
     */
    module.Test = function(){};

    /**
     * assert処理
     *
     * @param value
     * @param desc
     */
    module.Test.assert = function(value, desc){
        var li = document.createElement("li");
        li.className = value ? "pass" : "fail";
        li.appendChild(document.createTextNode(desc));
        if(!document.getElementById("results")){
            var body =  document.getElementsByTagName("body").item(0);
            var element = document.createElement('div');
            var element2 = document.createElement('ul');
            element.appendChild(element2);
            element2.id = "results";
            body.appendChild(element);
        }
        document.getElementById("results").appendChild(li);
    };


    window.onload = function(){
        module.Test.assert(true, "テストスイートを実行中");
        module.Test.assert(false, "失敗!");
    }

});