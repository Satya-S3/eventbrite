import styles from "./Body.module.css";
import BodyItems from "./BodyItems";

function Body(){

      const item=[
            {
                  Title:"Keith Barry,s Virtual Valentines Show",
                  Date:"Mon, Feb 15, 2021 2:30AM IST",
                  Price:"Starts at $27.55",
                  Image:"/images/img1.jfif",
            },
            {
                  Title:"An evening with Kazuo Ishiquro",
                  Date:"Wed, Mar 3, 2021 12:30AM IST",
                  Price:"Starts at $7.81",
                  Image:"/images/img2.jfif",
            },
            {
                  Title:"Valentines Day Virtual Beer Festival",
                  Date:"Sun, Feb 14, 2021 9:30AM IST",
                  Price:"Starts at $50.00",
                  Image:"/images/img3.jfif",
            }
      ]
     
      return <>
            <div className={`${styles.container} justify-content-center`}>
                  <div className="">
                        <h1 className={`px-3 ${styles.title}`}>Likes</h1> 
                        {item.map(i=><BodyItems key={i.Title} item={i}/>)}
                  </div>
            </div>
      </>
}
export default Body;