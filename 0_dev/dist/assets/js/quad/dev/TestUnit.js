/**
 * TestUnitクラス
 *
 * @constructor
 */
var TestUnit = function(){
    if(TestUnit.isInitialized) this.initialize();
};
//----------------------------------------------
// Header
//----------------------------------------------
TestUnit.initialize     = initialize;
TestUnit.assert         = assert;

// TestUnitのカウンター
TestUnit.counter        = 0;


/**
 * Assert処理
 *
 * @param value
 * @param desc
 * @constructor
 */
function assert(value, desc){
    var li = document.createElement("li");
    var result = value ? "pass" : "fail";
    li.className = result;
    li.appendChild(document.createTextNode((TestUnit.counter++) + ": " + result + " = " + desc));
    document.getElementById("results").appendChild(li);
}

/**
 * 初期設定
 */
function initialize(){
    var html = "<style>";
    html += '#results li.pass { color: green; } ';
    html += '#results li.fail { color: red; }';
    html += '</style>';
    html += '<ul id="results"></ul>';
    document.write(html);
}


// 実行
TestUnit.initialize();
