# Interview Test

##1.json檔案設計
*root-group內可以是string(空group)或是array(有其他物件)
*若有其他物件，每個物件用obj包裝，內容包含id與名稱及內容(group or rect)
*group內可以裝2個以上物件，當今天要裝2個以上物件時，一樣使用array

##2.app.js匯入json檔
*在App的return內先檢查json檔案是否存在
*另設component(Iterate)來處理json物件的render
*將jsonObj匯入Iterate中

##3.Iterate
*先檢查jsonObj是否存在（否則Object.keys會出現error）
*若物件type為object(array)，則loop每個array物件，並透過recursion 呼叫 Iterate本身（處理nested array部分）
*若物件type為string，則單純回傳物件（物件名稱當作內容放在div內
