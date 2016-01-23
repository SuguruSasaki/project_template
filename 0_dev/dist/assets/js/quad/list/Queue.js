(function(global){
    "use strict";

    // モジュール設定
    global["quad"] = global.quad || {};
    var module = global.quad;


    /**
     * 待ち行列クラス
     *
     * @constructor
     */
    module.Queue = function(){
        this._list = [];            // データ格納する配列
        this._frontStackPoint = 0;  // 先頭
        this._rearStackPoint  = 0;  // 末尾
    };
    //--------------------------------------------
    // Header
    //--------------------------------------------
    module.Queue.prototype["_next"]   = Queue_next;
    module.Queue.prototype["enqueue"] = Queue_enqueue;
    module.Queue.prototype["dequeue"] = Queue_dequeue;
    module.Queue.prototype["empty"]   = Queue_empty;



    /**
     * スタックポイントを次にずらす
     *
     * @param stackPoint
     * @returns {*}
     * @constructor
     */
    function Queue_next(stackPoint){
        return stackPoint + 1;
    }


    /**
     * キューに追加
     * @param data
     * @constructor
     */
    function Queue_enqueue(data){
        if(this._next(this._rearStackPoint) == this._frontStackPoint) throw new Error("待ち行列がフルなので要素を入れれ荒れません。");
        this._list[this._rearStackPoint] = data;
        this._rearStackPoint = this._next(this._rearStackPoint);
    }

    /**
     * キューから取り出す
     * @returns {*}
     * @constructor
     */
    function Queue_dequeue() {
        if(this._frontStackPoint == this._rearStackPoint) throw new Error("待ち行列が空なので要素をとりだせません。");
        var data = this._list[this._frontStackPoint];
        this._frontStackPoint = this._next(this._frontStackPoint);
        return data;
    }

    /**
     * 待ち行列が空か調べる
     *
     * @returns {boolean}
     * @constructor
     */
    function Queue_empty(){
        return this._frontStackPoint == this._rearStackPoint;
    }


})((this || 0).self || global);















