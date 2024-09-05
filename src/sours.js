  /*
 return (
   <div>
     <User name="sarvin2" age={43} email="salam@sarvinsyle.ir" />
     <User name="ali" age={20} email="none"/>
     <User name="sara" age={22} email="---" />

     <Job salary={10000000000} position="Developer" company="google" />
     <Job salary={1005000000} position="Senior Developer" company="youtube" />
 
     <Sogl salary={2030} shaan= "oskol" party  = "darad"  />
     <Konkor soal = "چرا خورشید میتابه" javab = {2} />
  </div> 

 )
}

const GetName = (name) => {
  return name
}
// //props
// const props = {
//   name : "sarvin",
//   age : 43, 
//   email : "salam@sarvinstyle.ir"
// }

const Job =(props) =>{
  return <div>
     {props.salary} , {props.position} , {props.company}
  </div>
}

const Sogl = (props) =>{
  return <h1 className='App' style={{fontFamily :"initial" , fontSize : "20px"}}> 
      {props.salary},{props.shaan} ,{props.party}
    </h1>
  
}
const Konkor = (props)=>{
  return <div dir='rtl'> 
    {props.soal},{props.javab}
  </div>

}


//Componnet
const User = (props)=>{
  return (
    <div>
    <h1>{props.name}</h1>
    <h2>{props.age}</h2>
    <h2>{props.email}</h2>
  </div>
  ) 
  
  const Shart = 20;

return ( 
  <div>
  {Shart === 20 ? <h1 className='App'>bia bro</h1> : <h2 style={{display : "none"}}>na khonbe</h2>}

  {Shart ===20 && <h1>khonbe</h1>}
  </div>
)


const Shart = 20;

return ( 
  <div className='App'>
<button type='submit' className={Shart === 20 ?  'movetoup' : "movetodown"} >khobe</button>
  </div>





const users = [
  {name: "reza" , age:21},
  {name: "reza1" , age:2112},
  {name: "reza2" , age:211}
]

return (
   <div className='App'>
  { users.map ( (user , index )=>{
    return <User key={index} name={user.name} age = {user.age} />
  })}
</div>
)
)



  const classes = [
      { name : "html" , finished : true},
      { name : "javascript" , finished : false},
      { name : "css" , finished : true},
      { name : "bootstrap" , finished : false},
      { name : "react" , finished : true},
      { name : "python" , finished : false},
    ];

  return (
    <div className="App">
        {classes.map((c , index)=>{
            return c.finished && <h2 key={index}>{c.name}</h2>
        })}
    </div>
  )

  ''episode 4 ''


  const[age , setAge] = useState(0) 


return <div className="App">
  <h2 id="demo" > {age}</h2>
  <button onClick={()=>setAge(age +1)}>+1</button>
  <button onClick={()=>setAge(age  - 1)}>-1</button>
</div>


const[number , setnumber] =useState(0)

return (
  <div className="App">
  <button onClick={()=>setnumber(number+1)}>+</button>
  <h1 style={{ color: number > 1 ? "green" : "khaki" ,}}> {number} </h1>
  <button onClick={()=>setnumber(number-1)}> -</button>
 <br>
 </br>
 <button onClick={()=>setnumber(0)}>reset</button>
  </div>         
)
}
*/






/*
const [courseList , setCourseList] = useState([]);
const [newCourse, setNewCourse] = useState("")

const handelChange =(event)=>{
  setNewCourse(event.target.value)

}

const addCourse =() =>{
  // let arr=[];
  // const name ="sarvin"
  // arr.push(name)
  
  const course = {
    id : courseList.length === 0 ? 1 : courseList[courseList.length -1 ].id + 1 ,
    courseName : newCourse,
    isCompleted : false
  }
  setCourseList( [...courseList , course])
  console.log(courseList)

}
const deleteCourse =(courseId) =>{
  setCourseList(courseList.filter((course)=> courseId !== course.id ))
}

const completeCourse = (courseId)=>{
  const newCourseList = courseList.map((course)=>{
    if (course.id === courseId)
     return {...course , isCompleted : !course.isCompleted}
    else 
      return course
  })

  setCourseList(newCourseList)
}


return (
  <div className="App">
    <div className="add-course">
      <input type="text" onChange={handelChange}></input>
      <button onClick={addCourse}>Add Course</button>
    </div>
    <div className="list">
      { courseList.map ((course , index) =>{
        return (
          <Course key={index} course={course} 
          deleteCourse={deleteCourse} 
          completeCourse={completeCourse}
          />
        )
      })}

    </div>
  </div>
);
*/
/*مربوط هست به text.js
const[showtext ,setshowtext ] = useState(false) 

return(
  <div className="App">
  <button onClick={()=>!setshowtext(!showtext)}> showtext</button>
  {showtext && <Text/>}
  </div>
)




fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>
{
console.log(data)
});

const[catfact , setcatfact]=useState("")

useEffect(()=>{
  fetchdata()
},[])

const fetchdata=()=>{
  axios.get("https://catfact.ninja/fact")
  .then((res) =>{console.log(res.data)
  
  setcatfact(res.data.fact)
  });
}




const[name ,setname] = useState("");
const[showname ,setshowname] = useState({});


 const fetchage=()=>{
  axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
    console.log(res.data)
    setshowname(res.data)
  })
 }


return(
  <div className="App">
   <input placeholder="enter your name" onChange={(event)=>setname(event.target.value)} ></input>
   <button onClick={fetchage}>my age is . . . </button>
   <h2 > your age is : {showname?.age}</h2>
   <h2 > your name is : {showname?.name}</h2>
  </div>
)

https://excuser-three.vercel.app/v1/excuse/${excuse}










const[excu , setexcu] = useState("")

   const fetchexcu=(excuse)=> { 
   axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
  console.log(res.data)
  setexcu(res.data[0].excuse)
})
}
return(
  <div className="App"> 
  <button onClick={()=> fetchexcu ("family")}>family</button>
  <button onClick={()=> fetchexcu ("party")}>party</button>
  <button onClick={()=> fetchexcu ("office")}>office</button>
  <h1>{excu}</h1>
  </div>
)


epxide 9 

  const [username , setusername] = useState("eliyshmaz")
 return <div>
<Router >
  
 <Nav /> 

<Routes>
 <Route path="/Hisrory"  element={<Hisrory />} />
  const [username , setusername] = useState("eliyshmaz")
 <Route path="/"  element={<Home  />} />
 <Route path="/About"  element={<About username = {username} setusername={setusername} />} />
 <Route path="*"  element={<div>this page not ecxist!</div>} />
</Routes>
</Router>
</div>


import { User } from "./User";
import { useEffect, useState } from "react";
import Course from "./Course";
import Text from "./Text";
import axios, { Axios } from "axios";
import {BrowserRouter as Router ,Routes , Route , Link} from "react-router-dom" ; 
import { Home } from "./page/Home";
import { Hisrory } from "./page/Hisrory";
import { About } from "./page/About";
import {Nav} from "./page/Nav";
import { useState, createContext } from "react";
import './App.css';
export const ProfileContext = createContext();

episode11



 /* const [username, setUsername] = useState("");
  const [age, setAge] = useState();
  const clint = new QueryClient({defaultOptions :{
    queries : {refetchOnWindowFocus :false}
  }});
  return (
    <div>
      <QueryClientProvider client={clint}>
      <ProfileContext.Provider value={{ username, setUsername, age, setAge }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Hisrory"  element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>this page not exists!</div>} />
          </Routes>
        </Router>
      </ProfileContext.Provider>
      </QueryClientProvider>
    </div>
  );





    const {result , increment, decrement, reset, checkForError, error} = useCal(0);
  return( <div className="App">
    {result} 
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>   
    <button onClick={checkForError}>Check for Error</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
  </div>);






  const [state,dispatch]= useReducer(factReducer , initialState)



const fetchCatFact = () => {
  dispatch({ type: 'fetch_start' });
  axios.get('https://catfact.ninja/fact')
    .then((res) => {
      dispatch({ type:  ACTION_TYPES.fetch_success, data: res.data.fact });
      console.log(res);
    })
    .catch((error) => {
      dispatch({ type: ACTION_TYPES.fetch_error });
      console.log(error);
    });
};

return (
  <div>
    <button onClick={fetchCatFact}>
      {state.loading ? 'Loading...' : 'Fetch Cat Fact'}
    </button>

    {state.error && (<p>Error, something went wrong.</p>)}

    <h1>{state.fact}</h1>
  </div>
);
  */
  

