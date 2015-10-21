$(function(exports) {
    exports.quad = exports.quad || {};
    var module = exports.quad;

    /**
     ImageManager
     @author suguru.sasaki@quad.co.jp
     @date  2015.10.20
     @version 1.0.0

     カラムの高さ整頓クラス。
    */

    /**
     * 画像の読み込みを管理
     * TODO: 複数箇所から同一の画像監視が来た場合に、タイミングによっては失敗する可能性あります...
     *
     * @constructor
     */
    module.ImageManager = function(){

    };
    //-----------------------------------------
    // Header
    //-----------------------------------------

    // リスナー管理
    module.ImageManager.listeners = {};

    /**
     * 画像読み込みを監視する。
     *
     * @param target
     * @param completeFunc
     * @param scope
     * @param origin
     */
    module.ImageManager.watch = function(target, completeFunc, scope, origin){
        if(module.ImageManager.listeners[target[0].src]) return;
        var struct = new ImageStruct(target, completeFunc, scope, origin);
        module.ImageManager.listeners[target[0].src] = struct;
        struct.loadImage();
    };

    /**
     * 画像読み込み構造体
     *
     * @param target
     * @param scope
     * @param compFunc
     * @param args
     * @constructor
     */
    var ImageStruct = function(target, scope, compFunc, args){
        this.target = target;
        this.scope = scope;
        this.callBacks = [];
        this.addCallBack(scope, compFunc, args);
        this.counter = 0;
        this.counterMax = this.target.length;
    };

    /**
     * 画像読み込み
     */
    ImageStruct.prototype['loadImage'] = function(){
        var _this = this;
        this.target.each(function(key, image){
            image.orginSrc = image.src;
            image.src = "";
            $(image).load(function(){
                _this.counter++;
                if(_this.counter == _this.counterMax){
                    _this.execute();
                }
            });
            image.src = image.orginSrc;
        });
    };

    /**
     * コールバック処理の登録
     * @param scope
     * @param func
     * @param args
     */
    ImageStruct.prototype['addCallBack'] = function(scope, func, args){
        var callBack = new CallBack(scope, func, args);
        this.callBacks.push(callBack);
    };

    /**
     * コールバックを実行
     */
    ImageStruct.prototype['execute'] = function(){
        for(var i = 0; i < this.callBacks.length; ++i){
            var callBack = this.callBacks[i];
            callBack.execute();
        }
    };

    /**
     * コールバックオブジェクト
     * @param scope
     * @param func
     * @param args
     * @constructor
     */
    var CallBack = function(scope, func, args) {
        this.scope = scope;
        this.func = func;
        this.args = args;
    }

    /**
     * コールバック処理を実行
     */
    CallBack.prototype['execute'] = function(){
        this.func.apply(this.scope, [this.args]);
    }
});
