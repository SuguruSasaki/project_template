HTMLコーディングでのデフォルト環境


# 概要
開発環境を統一することで、だれでも編集可能となるよう一定のルールを設けます。
これで決まりというわけではないので、より良い方法などがあればご意見ください。

# ディレクトリ構成
基本的に以下の形を定めたいと思います。

・devディレクトリ
開発ディレクトリ、ここにhtmlのファイルを配置してください。

・dev/distディレクトリ
出力ディレクトリ。最終的に納品するファイルはこの中に。

・dev/scss
scssファイルはこちらに

テンプレートセットは僕のgithubからダウンロードできます。
[ディレクトリテンプレートをダウンロード](https://github.com/SuguruSasaki/project_template/archive/master.zip)


# タスクランナー
CSSのコンパイルやブラウザの自動更新等はgulpを使用します。
上記テンプレートにgulpfile.jsをすでに配置しています。

gulpのセットアップは下記を参照ください。
[gulpチートシート](https://quad.qiita.com/s_s_k/items/5105f69e859965ca2b3a)


# CSS

### 1.ベースCSS(ノーマライズと基本スタイルセット)
ノーマライズCSSを内包しているbootstrapをベースとします。
[bootstrapをダウンロード](http://getbootstrap.com/)


### 2.記述はScss
Sassやlessもありますが、すでに社内での利用実績の高いScssを採用します。



# JSライブラリ
JSの基本ライブラリは下記のものとします。

### 1.DOM操作 - jQuery
業界標準のjQueryを使用します。常に最新版を使えば問題ないです。
[jQueryダウンロード](https://jquery.com/)


### 2.アニメーション Velocity.js
jQueryの拡張ライブラリ。jQueryの"animate"より圧倒的にパフォーマンスがよいです。
JS内部でCSSのアニメーションを実行します。ブラウザが対応していない場合はjQueryのanimateになります。
[Velocity.jsダウンロード](http://julian.com/research/velocity/)

使い方は簡単です。ここを見ていただくのが良いと思います。
[Velocity.jsの使い方](http://qiita.com/kyota/items/754e0e6cb7a144eda850)


### 4.便利機能系
quad_bootstrap.jsを開発中。開発済みは下記の機能。

+ アンカースクロール
+ ボックス高さ揃え

欲しい機能あれば、検討します。


### 3.MVC　Mithril
MVCはミスリルを推奨。簡易であり、非常に高速に動作するのがメリットです。
