import { useState } from "react";
import Home from './components/Home/Home';
import style from "./app.module.css";
import './index.css';
import Search from "./components/character/Search";

function App() {
  const [click, setClicked] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onclick(e) {
    const rect = e.target.getBoundingClientRect(); // get image position relative to viewport

  const x = e.clientX - rect.left; // X relative to image
  const y = e.clientY - rect.top;  // Y relative to image

  console.log("relative x:", x);
  console.log("relative y:", y);

    // Save the position where the user clicked
    setPosition({ x, y });
    setClicked(true);
  }
    function imageclick(e) {
  let name = e.target.alt.toLowerCase();
  
  const x2 = position.x;
  const y2 = position.y;
  
  const steven = {x :1658, y : 1722}
  const tom = {x:1621,y:3118}
  const peter = {x:1417 ,y:3195}
  
  switch (name) {
    
    case "peter":
      console.log("this is peter");
  const peterdistance = Math.sqrt((x2 - peter.x) ** 2 + (y2 - peter.y) ** 2);
  console.log(peterdistance);
  if (peterdistance < 30) {
    console.log("you Have Found Peter");
  }
      break;
      case "tom":
      console.log("this is tom");
  const tomdistance = Math.sqrt((x2 - tom.x) ** 2 + (y2 - tom.y) ** 2);
  if (tomdistance < 30) {
    console.log("you Have Found tom");
    
  }
  


      break;
      case "steven":
      console.log("this is steven");
  const stevendistance = Math.sqrt((x2 - steven.x) ** 2 + (y2 - steven.y) ** 2);
   if (stevendistance < 30) {
    console.log("you Have Found steven");
    
  }
  


      break
  }
  

  
}

  return (
    <div className={style.wrapper} style={{ position: "relative" }}>
      <img src="/img2.jpg" alt="" onClick={onclick} style={{ width: "100%", display: "block" }} />
      <Home />
     < Search />
      {/* Show character at mouse click position */}
      {click && <Character x={position.x } y={position.y} imageclick={imageclick}/>}
    </div>
  );
}

function Character({ x, y,imageclick }) {
  return (
    <div
      className={style.charcontainer}
      style={{
        position: "absolute",
        top: y,      // set Y position
        left: x,     // set X position

      }}
    >
      <div className={style.imgcontainer} style={{ display: "flex", gap: "5px" }} >
        <div className={style.img} onClick={imageclick}><img src="/peter.jpg" alt="Peter" width="50" /></div>
        <div className={style.img}onClick={imageclick}><img src="/tom.jpg" alt="Tom" width="50" /></div>
        <div className={style.img}onClick={imageclick}><img src="/steven.jpeg" alt="Steven" width="50" /></div>
      </div>
    </div>
  );

}


export default App;
