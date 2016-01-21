/**
 * Stackクラス
 *
 *
 * @constructor
 */
var Stack = function(){
    this._list = [];  // データ格納する配列
    this._stackPointer = 0;
};

/**
 * データを積む
 * @param data
 */
Stack.prototype["push"] = function(data){
    this._list[this._stackPointer++] = data;
};

/**
 * データを降ろす
 */
Stack.prototype["pop"] = function(){
    var data = this._list[--this._stackPointer];
    return data;
};

/**
 * スタックが空かどうか調べる
 * @returns {boolean}
 */
Stack.prototype["empty"] = function(){
    return this._stackPointer == 0;
};


