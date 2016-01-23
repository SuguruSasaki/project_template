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
    module.LinkedList.prototype["delete"] = LinkedList__delete;
    module.LinkedList.prototype["next"]   = LinkedList__next;


    /**
     * データの挿入
     * @param data
     * @constructor
     */
    function LinkedList__insert(data){
        if(this._next) data.insert(this._next);
        this._next = data;
    }

    /**
     *
     * @constructor
     */
    function LinkedList__delete(){
        if(this._next) {
            var p = this._next.next();
            if(p) this._next = p;
        }
    }

    /**
     * 次のLinkedListオブジェクトを取得
     *
     * @returns {null|*|Queue_next}
     * @constructor
     */
    function LinkedList__next() {
        return this._next;
    }







})((this || 0).self || global);







