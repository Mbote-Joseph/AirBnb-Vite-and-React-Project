import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Card from './components/Card'
import wedding from './components/images/wedding.png'
import mountain from './components/images/mountain.png'
import image from './components/images/image.png'

function App() {
  // const [count, setCount] = useState(0)
  // <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  const Data=[
    {
      image: image,
      rating: "5.0",
      stars:"6",
      country:"USA",
      text:"Life lessons with Katie Zaferes",
      price:"136"
    },
    {
      image:wedding,
      rating:"5.0",
      stars:"30",
      country:"UK",
      text:"Learn wedding photography",
      price:"125"
    },
    {
      image:mountain,
      rating:"4.8",
      stars:"2",
      country:"Canada",
      text:"Group Mountain Biking",
      price:"50"
  }
  ];
  // <Card image={image} rating="5.0" stars="6" country="USA" text="Life lessons with Katie Zaferes
  //   " price="136"/>
  //   <Card image={wedding} rating="5.0" stars="30" country="UK" text="Learn wedding photography
  //   " price="125"/>
  //   <Card image={mountain} rating="4.8" stars="2" country="Canada" text="Group Mountain Biking
  //   " price="50"/>

  return (
    <div>
    <Nav />
    <Hero/>
    <Section className="section" />
    <div className="cardSection">
    
    {
      Data.map(element => {
        return (
          <Card key={element.text} image={element.image} rating={element.rating} stars={element.stars} country={element.country} text={element.text} price={element.price}/>
        )
      })
    }
    
    </div>
    
   
    </div>
  )
}

export default App
