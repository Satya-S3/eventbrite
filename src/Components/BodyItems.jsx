import { LuUpload } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import styles from "./Body.module.css";
import { useState } from "react";

function BodyItems({item}){
      const [heart,setHeart]=useState("");

      const heartToggle=()=>{
            if(heart=="") setHeart("text-danger")
            else setHeart("")
      }
      return <>
            <center className="items m-4 position-relative">
                              <div className="d-flex">
                                    <img src={item.Image} alt="" width={250} />
                                    <div className="text-start mx-4">
                                          <h6 id="title">{item.Title}</h6>
                                          <p className="text-secondary">{item.Date}</p>
                                          <p className="text-secondary">{item.Price}</p>
                                    </div>
                                    <div className={`${styles.icons} position-absolute top-100 start-100 translate-middle d-flex `}>
                                          <LuUpload className={styles.icon}/>
                                          <FaHeart onClick={()=>heartToggle()} className={`${heart} ${styles.icon}`}/>
                                    </div>
                              </div>
                        </center>
      </>
}
export default BodyItems;