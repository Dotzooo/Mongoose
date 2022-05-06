# Mongoose

## Node.js NPM 整合 MongoDB


##主線任務
> 設計一個 /posts 路由，設計與 todolist kata 一樣的設計，並將欄位調整擴充為一則貼文會有的欄位

1. POSTMAN.json
2. config.env 忽略，不能在 GitHub 上
3. 請連接 mongodb 雲端 atlas 資料庫
4. mongoose 連接遠端資料庫
5. dotenv 加上環境變數，讓程式更安全
6. 部署到 heroku 主機

### 資料夾結構
1. connections 連接資料庫設定
2. controllers API進入點
3. Header      API 請求之 header 封裝
4. models      Schema 設定
5. routes      各種 API 請求方法及路徑控管
6. service     API 請求回應 成功或失敗訊息
7. server.js   檔案進入點