import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text,setText]=useState('');
  const [name,setName]=useState('Love');


  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  //Agar aap kuch kaam krwana chahte ho component ke render krne ke baad then useEffect use krenge->yehi side effect hai
  //useEffect(callbackfunction ,[array of dependencies])

  //jaise hi app component render ho chuka hoga waise hi useEffect start hoga
  //variation-1===Runs after each render
  // useEffect(()=>{
  //   console.log("Ui Rendering Done");
  // });

  // variation 2=>First render
  // useEffect(()=>{
  //   console.log("UI Rendering Done");
  // },[]);


  // variation 3 ->on first render + whenever dependency changes
  // useEffect(()=>{
  //   console.log("Change observed"); 
  // },[name]);



  //Variation 4 ->To handle unmounting of a component
  useEffect(()=>{
    //add event listener
    console.log("Listener added");

    //pehle return wala statement work krega useke baad upar wala code run hoga 
    // kyon?? koi jawaab nhi hai
    return ()=>{ 
      console.log("Listener removed");
    }
  },[text]);


    

  return (
    <div className="App">
      <input type="text"  onChange={changeHandler}/>
      
    </div>
  );
}

export default App;
