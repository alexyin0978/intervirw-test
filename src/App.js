import './App.css';

import jsonObj from './nested.json';


const checkType = (obj) => Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();

const Iterate = ({obj}) => {

  if(obj){

    const [id,type] = Object.keys(obj);
  
    if(checkType(obj[type]) === 'array'){
  
      const arr = obj[type];
  
      return(
        <div className={arr[0]} key={obj[id]}>
          {arr[0]}
          <>
            {
             arr.filter((subObj,idx) => idx > 0)
             .map(subObj => {
              const [id] = Object.keys(subObj);
               return (
                <Iterate obj={subObj} key={subObj[id]}/>
               )
             })
            }
          </>
        </div>
      )
    }else{
      return(
        <div className={obj[type]} key={obj[id]}>
          {obj[type]}
        </div>
      )
    }
  }
};

function App() {
  
  return (
    <>
      {
        jsonObj ? <Iterate obj={jsonObj} /> : null
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






