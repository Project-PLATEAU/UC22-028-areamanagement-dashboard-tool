# FY2022 Project PLATEAU uc22-028「エリアマネジメント・ダッシュボードの構築」の成果物
![キービジュアル](./img/key_visual.png "エリアマネジメント・ダッシュボード")

## **1.概要**

<p>エリアマネジメント団体向けの3D都市モデルビューワとダッシュボードを組み合わせた地域情報プラットフォームを開発しました。本プロジェクトにおけるシステムをオープンソースウェアとして公開します。</p>

## **2.エリアマネジメント・ダッシュボードの構築について**

### **ユースケースの概要**

<p>地域の安心・安全・快適な環境づくりや価値向上を目的として、全国でエリアマネジメント団体が活動しています。活動の継続性を担保するには、団体メンバー間の円滑な情報共有や、外部に向けて効果的に活動内容を発信するためのツールが必要であると考えました。</p>
<p>今回のユースケースでは、エリアマネジメント活動状況や効果の可視化、災害発生時を想定した帰宅困難者避難計画の策定支援、イベント情報の配信等に活用可能な地域情報プラットフォームを構築し、エリアマネジメント活動の運営の高度化、地域防災力の向上、地域の賑わい創出等における有用性を検証しました。</p>


### **開発システムの概要**

<p>開発した地域情報プラットフォームは、イベント情報やバリアフリー情報、災害リスク情報などの地域情報を3D空間上で確認できる「3D都市モデルビューワ」と、各地域情報の一覧や集計結果を表やグラフ形式で確認できる「地域情報ダッシュボード」で構成され、建物や場所に紐づいた地点の情報と、地域単位で集計した情報を相互に連携し閲覧できるシステムとして構築しました。具体的には、エリアマネジメント活動の実施場所や避難施設情報といったミクロな地点情報と、地域統計情報や災害リスクの集計結果といったマクロな地域データを相互に抽出できるよう、連携・表示させ、可視化を図ったことが特長です。</p>

## **3.利用手順**
### **インストール**<!-- 納品時リンク変更 -->
* 本システムで必要となるソフトウェアを下表に示します。 [稼働環境構築手順書](https://project-plateau.github.io/UC22-028-areamanagement-dashboard-tool/manual/devMan.html)を参照の上、ソフトウェアのインストール及びセットアップを完了させてください。

    [エリアマネジメント・ダッシュボード　稼働環境構築手順書](https://project-plateau.github.io/UC22-028-areamanagement-dashboard-tool/manual/devMan.html)

    |ソフトウェア|プロジェクトフォルダ|
    | - | - |
    |1. Metabase|[/SRC/metabase](./SRC/metabase/)|
    |2. GeoServer|-|
    |3. API|[/SRC/api](./SRC/api/)|
    |4. 3DView|[/SRC/3dview](./SRC/3dview/)|

    ※データベースの構築及び認証で使用するミドルウェアのセットアップも合わせて必要となります。

* 構築時に必要となるファイルを下表に示します。

    |ファイル|プロジェクトフォルダ|
    | - | - |
    |1. 環境設定ファイル一式|[/Settings/environmant_settings/](./Settings/environmant_settings/)|
    |2. サンプルデータ一式|[/Settings/area_management_sample_data/](./Settings/area_management_sample_data/)|
  

### **使い方**
#### **利用できる動作環境**

最新のデスクトップ版　Chrome、Edge上

最小システム要件　CPU：2GHｚデュアルコア以上、システムメモリ（RAM）：4GB以上

#### **操作マニュアル**<!-- 納品時リンク変更 -->

本システムの使い方は下記の操作マニュアルを参照ください。

[エリアマネジメント・ダッシュボード　操作マニュアル](https://project-plateau.github.io/UC22-028-areamanagement-dashboard-tool/manual/userMan.html)

## **ライセンス** <!-- 定型文のため変更しない -->
* ソースコードおよび関連ドキュメントの著作権は国土交通省に帰属します。
* 本ドキュメントは[Project PLATEAUのサイトポリシー](https://www.mlit.go.jp/plateau/site-policy/)（CCBY4.0および政府標準利用規約2.0）に従い提供されています。

## **注意事項** <!-- 定型文のため変更しない -->

* 本レポジトリは参考資料として提供しているものです。動作保証は行っておりません。
* 予告なく変更・削除する可能性があります。
* 本レポジトリの利用により生じた損失及び損害等について、国土交通省はいかなる責任も負わないものとします。

## **参考資料**　 <!-- 各リンクは納品時に更新 -->
* エリアマネジメント・ダッシュボードの構築 技術検証レポート:https://www.mlit.go.jp/plateau/file/libraries/doc/plateau_tech_doc_0023_ver01.pdf
* PLATEAU Webサイト Use
caseページ「エリアマネジメント・ダッシュボードの構築」:https://www.mlit.go.jp/plateau/use-case/uc22-028/
* Project-PLATEAU PLATEAU-VIEW:https://github.com/Project-PLATEAU/PLATEAU-VIEW
* Project-PLATEAU terriajs:https://github.com/Project-PLATEAU/terriajs
* Metabase:https://www.metabase.com/
* GeoServer:https://geoserver.org/
