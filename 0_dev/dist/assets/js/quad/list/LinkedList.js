(function(global){
    "use strict";

    // モジュール設定
    global["quad"] = global.quad || {};
    var module = global.quad;


    /**
     * 連結リストクラス
     *
     *
     *
     *
     * @param data
     * @constructor
     */
    module.LinkedList = function(data){
        this._next = null;
        this._data = data;
    };
    //--------------------------------------------
    // Header
    //--------------------------------------------
    module.LinkedList.prototype["insert"] = LinkedList__insert;


    /**
     * データの挿入
     * @param data
     * @constructor
     */
    function LinkedList__insert(data){
        this._next = data;
    }







})((this || 0).self || global);







