import './App.css'

function App() {
  return 
      
      <div>
            <h1>Developer Team</h1>
            <Card
             name = "Sanjay Kumar Das"
             email = "itzzsanjaykumardas@gmail.com"
             bio = "Full-Stack Developer"
            />
            <Card />
            <Card />
      </div>
}


function Card(arg) {
  
  console.log(arg)

  return 
     <div style={{
      border : '1px solid black',
      width : '12rem'
     }}>

       <h3>{arg.name}</h3>
       <p>{arg.email}</p>
       <p>{arg.bio}</p>   

     </div>
}

export default App
