# SPAJAM ﾁｮｯﾊﾟﾔｳｴｯﾌﾞﾌﾛﾝﾄ
![ミサワ](https://livedoor.blogimg.jp/jigokuno_misawa/imgs/9/9/995804f2.gif) 

SPAJAMで作成するアプリの使用技術的なのを書いていくよ．

基本的にはVueを使って，最近スマホで使えるSPAで作られたPWAを使ってモバイルアプリライクなWebページを作って審査員をごまかすんだ！！！

ちなみにSSRではなくてCSRを使うよ．
別にCEO対策とかしないし，今から勉強するのとか面倒だしいらないとおもふ．

以下を模倣させたサンプルプロジェクトは後々GitHubに作っておくぜ
（アトミックデザイン良さげだけど，ハッカソンレベルならメインカラー統一のCSSくらいしか導入できなさそう）

補足：
SSR気になる人は以下を読んで自分にあったものを使うべし！今回は使わない！
https://qiita.com/macoshita/items/bf295a1e0f5fefff3d8e

## おおまかな環境とか
### 使用技術
- node.js v10.15.2
- Vue CLI v3.5.0
- mobileのChrome or Safariの最新版

### 使用するNodeのパッケージ
以下のライブラリの殆どはVue CLIでプロジェクト作成する際に初期導入できます．

あまりにもパッケージ入れすぎるとアプリが重くなってスマホアプリっぽくなくなるから導入は慎重に😤

- vuex 
    - 状態管理をするライブラリ
- vue-router
    - ページのルーティングを行うライブラリ
- register-service-worker
    - キャッシュなどを行ってくれるService Workerを導入するライブラリ
    - Service Workerを使える = PWAにできる
- babel
    - buildしたファイルをes5だったりにうまく変更してくれるやつ
    - 詳しい仕様は知らん 
- eslint
    - コードをきれいにするための規約みたいなやつ
    - autofixとかしてくれるからcommitする前とかに行うと良き
- vuetify（vue-cliから導入）
    - マテリアルUIを手軽に作れるライブラリ
### 関連技術
- PWA
- SPA

### 読んでおいたほうが良いやつ
- PWA対応OS
    - https://caniuse.com/#search=Service%20Workers
- iPhoneのPWAで使えるネイティブ的な機能
    - https://medium.com/@takeshiamano/ios%E3%81%AE11-3%E3%81%8B%E3%82%89%E3%81%AEpwa%E5%AF%BE%E5%BF%9C%E3%81%A7%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8-313f638a172b

## 事前に勉強すると幸せになれること
- vuetify       割と特殊な書き方多め

## 開発を行うにあたって
### コミットメッセージ
このリポジトリではAngularJSのコミットスタイルを採用します（コミットメッセージにプレフィックスをつけるやつ）
詳しくは以下を御覧ください．  
https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

### CI/CD
CircleCIを使って自動でビルドを行い，デプロイの時間短縮等につなげましょう．

本番では
- masterにpushしたものがデプロイされるprd環境
- developにpushしたものがデプロイされるdev環境

の２つを用意します．

勝手に用意しておくので，「GitHubにpushすれば勝手にデプロイされるんだぁ〜って思っておけばよきです．

### ディレクトリ構造
今回は以下のディレクトリ構造で行いたいと思います．

異論は認める．
```
src
├── assets        外部のCSS及び画像を入れるとこ
├── components    コンポーネント
├── helpers       storeを更新しない処理を書いたファイルを入れるディレクトリ
├── layouts       レイアウト
├── pages         ページ
├── plugins       vuetifyなどのやつ置かれるとこ
└── vuex          vuex関係のやつ置くとこ
    ├── actions   actionをまとめておく　中にあるindex.jsに関連ファイルを書き出して一括でexportする
    ├── getters   getterをまとめておく　中にあるindex.jsに関連ファイルを書き出して一括でexportする
    ├── mutations mutationをまとめておく　中にあるindex.jsに関連ファイルを書き出して一括でexportする
    ├── states    stateをまとめておく　中にあるindex.jsに関連ファイルを書き出して一括でexportする
    └── store.js  上記のexport全てをまとめたファイル
```

`pages`

routerの最上位になるところ
ここをルーティング先にする

`layouts`

どのページにも共通しているものをここに作る
例えばメニューだとか

`component`

どのページからでも使えるものを作る
再利用するもの


つまりどこでも使いそうでないものはpagesに直接書いちゃっていいよ

複雑になりそうな記述とかはコンポーネントにしても良き

### 命名規則について
以下をリスペクト

https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README-JP.md

componentsの配下などのディレクトは`PascalCase(ex.ImageList)`でファイル名も同様です．

変数名，メソッド名などは`camelCase(ex.imageList)`にしましょう．

ただ，ローカル変数などはアンスコを変数名の前に`(ex._imageList)`つけましょう


### CSSについて
今回は`CSS in JS`を使ってスタイルを当てていくよ

メリットとして，グローバルではなく単一のファイルにCSSを定義するから，クラス名などを深く考えなくて良いところがあります（つまり，ファイルさえ違えば同一のクラス名でもおｋってこと）

書き方としては，.vueファイルに<style>タグを使って記述していきましょう．

### TESTについて
ハッカソンなのでしません

## サンプルプロジェクトの実行
以上のことを模倣したProjectがこのリポジトリとなっております．
```
$ npm i
$ npm run serve 
```
で実行してみてください．

本プロジェクトはmaster，devどちらにpushしても  
https://spajam2019-tmp.firebaseapp.com  
にビルドされます．

ご確認したい方はどうぞお使いください．

## コマンド一覧
### 初期インストール
```
$ npm install
```
### ローカルで動かす
```
$ npm run serve
```
### 実際にビルドする
```
$ npm run build
```
### lintにあわせて修正する
```
$ npm run lint
```

