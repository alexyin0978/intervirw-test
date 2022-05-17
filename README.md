# Interview Test

1.json檔案設計
  a.root-group內可以是string(空group)或是array(有其他物件)
  b.若有其他物件，每個物件用obj包裝，內容包含id與名稱及內容(group or rect)
  c.group內可以裝2個以上物件，當今天要裝2個以上物件時，一樣使用array

2.app.js匯入json檔
  a.在App的return內先檢查json檔案是否存在
  b.另設component(Iterate)來處理json物件的render
  c.將jsonObj匯入Iterate中

3.Iterate
  a.先檢查jsonObj是否存在（否則Object.keys會出現error）
  b.若物件type為object(array)，則loop每個array物件，並透過recursion 呼叫 Iterate本身（處理nested array部分）
  c.若物件type為string，則單純回傳物件（物件名稱當作內容放在div內
