/**
 * 待ち行列クラス
 *
 * @constructor
 */
var Queue = function(){
    this._list = [];    // データ格納する配列
    this._frontStackPoint = 0;  // 先頭
    this._rearStackPoint  = 0;  // 末尾
};

Queue.prototype["_next"] = function(stackPoint){
    return stackPoint + 1;
};

/**
 *
 * @param data
 */
Queue.prototype["enqueue"] = function(data){
    if(this._next(this._rearStackPoint) == this._frontStackPoint) throw new Error("待ち行列がフルなので要素を入れれ荒れません。");
    this._list[this._rearStackPoint] = data;
    this._rearStackPoint = this._next(this._rearStackPoint);
};

Queue.prototype["dequeue"] = function(){
    if(this._frontStackPoint == this._rearStackPoint) throw new Error("待ち行列が空なので要素をとりだせません。");
    var data = this._list[this._frontStackPoint];
    this._frontStackPoint = this._next(this._frontStackPoint);
    return data;
};

/**
 * 待ち行列が空か調べる
 * @returns {boolean}
 */
Queue.prototype["empty"] = function(){
    return this._frontStackPoint == this._rearStackPoint;
};




