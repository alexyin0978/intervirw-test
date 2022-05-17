import './App.css';

import jsonObj from './nested.json';


const Iterate = ({obj}) => {

  if(obj){

    const [id,type] = Object.keys(obj);
  
    if(typeof obj[type] === 'object'){
  
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

// const Iterate = (obj) => {
//   Object.keys(obj).forEach(key => {

//   console.log(`key: ${key}, value: ${obj[key]}`)

//   if (typeof obj[key] === 'object') {
//           Iterate(obj[key])
//       }
//   })
// }






