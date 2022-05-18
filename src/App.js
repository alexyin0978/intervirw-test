import './App.css';

import jsonObj from './nested.json';

//1.check type
const checkType = (obj) => Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();

//2.Group Component
const Group = ({obj}) => {

  //a.確保obj存在
  if(obj){

    const [id,type] = Object.keys(obj);
  
    //b.若Group內有其他物件
    if(checkType(obj[type]) === 'array'){
  
      const arrOfObj = obj[type];
  
      return(
        <div className={arrOfObj[0]} key={obj[id]}>
          {arrOfObj[0]}
          <>
            {
             arrOfObj.filter((subObj,idx) => idx > 0)
             .map(subObj => {

              const [id,type] = Object.keys(subObj);

              //#.若type為rect，則render rect
              if(subObj[type] === 'rect'){
                return <Rect obj={subObj} key={subObj[id]}/>
              //#.若type為Group，則render Group
              //這裡為recursion call，會不斷向下檢查直到Group內沒有別的物件
              }else{
                return <Group obj={subObj} key={subObj[id]}/>
              }
             })
            }
          </>
        </div>
      )
    //c.若Group裡面沒有東西
    }else{
      return(
        <div className={obj[type]} key={obj[id]}>
          {obj[type]}
        </div>
      );
    }
  }
};

//3.Rect Component
const Rect = ({obj}) => {

  const [id,type] = Object.keys(obj);

  return(
    <div className={obj[type]} key={obj[id]}>
      {obj[type]}
    </div>
  );
};

//4.App，內部放Group(root為Group)
function App() {
  
  return (
    <>
      {
        jsonObj ? <Group obj={jsonObj} /> : null
      }
    </>
  );
}

export default App;

/*
參考資料：

1.check levels of obj within obj
const Iterate = (obj) => {
  Object.keys(obj).forEach(key => {

  console.log(`key: ${key}, value: ${obj[key]}`)

  if (typeof obj[key] === 'object') {
          Iterate(obj[key])
      }
  })
};

2.typeOf替代方案
  a.what is the best way to check variable type in javascript
  b.你為什麼不問問神奇 JavaScript 呢？系列 第 6 篇

*/






