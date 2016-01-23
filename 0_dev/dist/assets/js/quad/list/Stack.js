(function(global){
    "use strict";

    // モジュール設定
    global["quad"] = global.quad || {};
    var module = global.quad;


    /**
     * Stackクラス
     *
     *
     * @constructor
     */
    module.Stack = function(){
        this._list = [];            // データ格納する配列
        this._stackPointer = 0;     // スタックポイント
    };
    //--------------------------------------------
    // Header
    //--------------------------------------------
    module.Stack.prototype["push"] = Stack_push;
    module.Stack.prototype["pop"]  = Stack_pop;
    module.Stack.prototype["empty"] = Stack_empty;

    /**
     * データを積む
     * @param data
     * @constructor
     */
    function Stack_push(data){
        this._list[this._stackPointer++] = data;
    }

    /**
     * データを降ろす
     * @returns {*}
     * @constructor
     */
    function Stack_pop(){
        return this._list[--this._stackPointer];
    }

    /**
     * Stackの空判定
     * @returns {boolean}
     * @constructor
     */
    function Stack_empty(){
        return this._stackPointer == 0;
    }



})((this || 0).self || global);


