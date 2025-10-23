
import Home from './components/Home/Home';
import style from "./app.module.css"
import './index.css'
function App() {
  return (
    <div  className={style.wrapper}>
    <img src="../public/img2.jpg" alt="" onClick={onclick} />
      <Home   />
    </div>
  );
  function onclick(e) {
    console.log("clicked");
     console.log("x:", e.clientX);
    console.log("y:", e.clientY);
  }
}

export default App;
