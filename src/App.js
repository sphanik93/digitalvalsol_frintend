import React,{useEffect, useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from 'react-bootstrap';
import { useTable } from 'react-table';
import { Alert } from '@mui/material';

function App() {
  let obj = {"question":"1) Which of the following is the correct name of React.js?","choose":["React","React.Js","ReactJS"]}
  const [data, setRowdata] = useState([obj])
  const [chooseAnswer,setChooseAnswer] =  useState()
  const [editValue,seteditvalue] = useState(Array(20).fill(false))
  const [createValue,setCreatevalue] = useState(false)
  const [questionName,setQuestioname] = useState("")
  const [choose1,setChoice1] = useState("")
  const [choose2,setChoose2] = useState("")
  const [choose3, setChoose3] = useState("")
  const [creatNew,setCreatenew] = useState(false)
  const [withId,setWithid] = useState([])


  useEffect(()=>{
    getUseEffect()
  },[])

  const getUseEffect =()=>{
    fetch("http://localhost:4000/getData", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json())
      .then(output => {
        let newArray = []
        let newId=[]
        console.log(output.Details[0]._id,"neet", output.Details);
        for(let i=0;i< output.Details.length;i++){
          console.log("output.Details[i].question",output.Details[i].question[i])
          newArray.push(output.Details[i].question[0])
          newId.push(output.Details[i]._id)
        }
        console.log("newArray",newArray)
        setRowdata(newArray)
        setWithid(newId)
        setChooseAnswer(Array(newArray[0].choose.length).fill(false))
      })
      .catch(error => { });
  }
  const handlechecked = (ind)=>{
    console.log(ind,"chooseAnswer",chooseAnswer)
    for(let i=0;i<chooseAnswer.length;i++){
      console.log(i,"for",chooseAnswer[i])
      if(i == ind){
        chooseAnswer[i] = true
      } else{
        chooseAnswer[i] = false
      }
    }
  
   setChooseAnswer(chooseAnswer)
  }

  const creating =()=>{
    setQuestioname("")
    setChoice1("")
    setChoose2("")
    setChoose3("")
    setCreatenew(true)
    seteditvalue(Array(data.length).fill(false))
    setTimeout(function(){ scroldown() }, 1000);
  }

  const scroldown=()=>{
    window.scrollTo(0,9999);
  }

  const editing =(value,i)=>{
    let array_for = Array(20).fill(false)
  
    array_for[i] = true
    console.log(value.choose[i],"values i", value,i)
    setQuestioname(value.question)
    setChoice1(value.choose[0])
    setChoose2(value.choose[1])
    setChoose3(value.choose[2])
    seteditvalue(array_for)
    setCreatenew(false)
  }

  const changingquestion=(e)=>{
    console.log("000")
    setQuestioname(e.target.value)
  }

  const changingchoice1=(e)=>{
    console.log("000")
    setChoice1(e.target.value)
  }

  const changingchoice2=(e)=>{
    console.log("000")
    setChoose2(e.target.value)
  }

  const changingchoice3=(e)=>{
    console.log("000")
    setChoose3(e.target.value)
  }

  const submit =(value,i,type)=>{
    console.log(withId,"value===",value)
    let obj
    if(type != "edit"){
    var ran = Math.floor(Math.random()*(999-100+1)+100);
    console.log("ran-===",ran)
    obj = {"id":ran,"question":questionName,"choose":[choose1,choose2,choose3]}
    } else{
    obj = {"id":withId[i],"question":questionName,"choose":[choose1,choose2,choose3]}
    }
    fetch("http://localhost:4000/Createquestion", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       data:obj
      })
    })
      .then(response => response.json())
      .then(output => {
        console.log(output.status ,"et++++++++++", output);
        if(output.status == 200){
          alert("Questionary has been Created")
          setCreatenew(false)
          seteditvalue(Array(data.length).fill(false))
          getUseEffect()
        }
      })
      .catch(err => { });

  }

  console.log("===",data)
  return (
   <div className="container mt-5 ">
      <div className="d-flex justify-content-between">
     <p style={{textDecoration:"underline",color:"rebeccapurple",fontWeight:600, fontSize:20}}>Choose the correct Answers </p>
     <Button variant="primary" onClick={creating}>Create Question</Button>
     </div>
     
     {data.length !=0 ?<>{data.map((value,i)=><div>
      {!editValue[i] ?<>
      <div className="d-flex justify-content-between mt-5">
      <span >{value.question}</span>
      <Button className="ml-5"variant="dark" onClick={()=>editing(value,i)}>Edit</Button></div>
      {value.choose.map((check,ind)=>
      <FormControlLabel control={
      <Checkbox name={check} label={check} checked={false} onChange={(e)=>handlechecked(ind)} />
      } 
      label= {check} />
      )}
      </>
      :<><div>
      <p>Question : </p>
      <input type="text" value={questionName} onChange={changingquestion} style={{width:600}}/>
      </div>
    
      <p>Choice 1 :</p><input type="text" value={choose1} onChange={changingchoice1}/>
      <p>Choice 2 :</p><input type="text" value={choose2} onChange={changingchoice2}/>
      <p>Choice 3 :</p><input type="text" value={choose3} onChange={changingchoice3}/><br/>
      <Button className=" mt-5"variant="danger" onClick={()=>submit(value,i,"edit")}>Submit</Button>
      </>}
      </div>
      
      )}</>:null}
     
    
    {creatNew?<div className="mt-5">
      <div>
      <p style={{color:"red", fontWeight:600, fontSize:20}}>Please add New Question : </p>
      <input type="text" value={questionName} onChange={changingquestion} style={{width:600}}/>
      </div>
    
      <p>Choice 1 :</p><input type="text" value={choose1} onChange={changingchoice1} />
      <p>Choice 2 :</p><input type="text" value={choose2} onChange={changingchoice2}/>
      <p>Choice 3 :</p><input type="text" value={choose3} onChange={changingchoice3}/><br/>
      <Button className=" mt-5"variant="danger" onClick={()=>submit()}>Submit</Button>
      </div>:null}
   </div>
  )
}

export default App
