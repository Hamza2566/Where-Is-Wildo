import style from "./character.module.css"

function Search() {
  return (
    <div className={style.charcontainer}>
        <div className={style.imgcontainer}>
           <div className={style.img}>
            <img src="/peter.jpg" alt="" />
           </div>
             <div className={style.img}>
              <img src="/tom.jpg" alt="" />
            </div> 
            <div className={style.img}>
              <img src="/steven.jpeg" alt="" />
            </div> 
        </div>
          
      

    </div>
  )
}

export default Search
