# Interview Test

## 1.json檔案設計
* root-group內可以是string(空group)或是array(有其他物件)
* 若有其他物件，所有物件用array包裝，每個物件本身為obj，obj內容包含id與type及內容(group or rect)
* group內可以裝2個以上物件，當今天要裝2個以上物件時，一樣使用array包裝所有物件

## 2.app.js匯入json檔
* 在App的return內先檢查json檔案是否存在
* 設定兩個component "Group"跟"Rect"來分別render group與rect
* App.js內放置Group(root)
* 將jsonObj匯入Group中

## 3.Group
* 先檢查jsonObj是否存在（否則Object.keys會出現error）
* 若物件type為array，代表Group內有其他物件，則loop每個array物件
* 檢查內部物件為"group"或"rect，前者則呼叫Group，後者則呼叫Rect
* 在Group內呼叫Group為recursion call，會不斷向下檢查、render直到Group內沒有別的物件
* 若物件type為string，代表Group內沒有別的物件，則單純回傳Group本身
