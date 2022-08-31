import React,{memo} from 'react'
import { useReducer, useEffect } from 'react'

const Test = (props) => {
  console.log('child rendering');
  let reduser = (value,action)=>{
    switch(action.type){
      case 'minus':return value-1
      case 'plus':return value+1
      default: return value
    }
  }
  let [state, dispatch] = useReducer(reduser,0)
  return (
    <div style={{textAlign:'center',display:'flex',height:'100vh',alignItems:'center',justifyContent:'center'}}>
      <button onClick={()=>dispatch({type:'minus'})} style={{width:'3rem',height:'2rem'}}>-</button>
      <span style={{fontSize:'24px'}}>{state}</span>
      <button onClick={()=>dispatch({type:'plus'})} style={{width:'3rem',height:'2rem'}}>+</button>
      <h1>{props?.title('Bobur').name}</h1>
    </div>
  )
}
export default memo(Test)