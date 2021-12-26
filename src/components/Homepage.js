import React from "react";
import styles from './Homepage.module.css';
import pic1 from '../images/speakersPic.png';
import pic2 from '../images/venuePic.png';
import pic3 from '../images/schedulePic.png';

const Homepage =()=>{
    return(
        <div>
 {/* //.... Section A...// */}
         <div className={styles.SectionA}>
             <h1>STYLES CONFERENCE</h1>
             <h3>August 24–26th — Chicago, IL</h3>
             <ul>
                 <li>HOME</li>
                 <li>SPEAKERS</li>
                 <li>SCHEDULE</li>
                 <li>VENUE</li>
                 <li>REGISTER</li>
             </ul>
             <div className={styles.TextA}>
             <h2>Dedicated to the Craft of Building Websites</h2>
             <p>Every year the brightest web designers and front-end developers descend on Chicago to discuss the latest tech logies.
                 Join us this August!</p>
             <button className={styles.btn}>REGISTER NOW</button>
             </div>
        </div> 

    {/* //.... Section B...// */}   
        <div className={styles.SectionB}>
            <div className={styles.BoxA}>
                <img src={pic1}  alt=" speakers pic"/>
                <h2>World-Class Speakers</h2>
                <p>Joining us from all around the world are over twenty fantastic speakers,
                 here to share their stories.</p>
            </div>

            <div className={styles.BoxA}>
                <img src={pic2}  alt=" schedule pic"/>
                <h2>Three Inspiring Days</h2>
                <p>Enjoy three inspiring and action-packed days of tals, gatherings,
                     and all-around good times.</p>
            </div>

            <div className={styles.BoxA}>
                <img src={pic3} alt=" venue pic"/>
                <h2>The Chicago Theatre</h2>
                <p>Within the heart of downtown Chicago, 
                The Chicago Theatre will provide a beautiful conference venue.
                </p>
            </div>

        </div>

     {/* //.... Section C...// */} 
        <div className={styles.SectionC}>
            <h3>© Styles Conference</h3>
            <ul>
                 <li>HOME</li>
                 <li>SPEAKERS</li>
                 <li>SCHEDULE</li>
                 <li>VENUE</li>
                 <li>REGISTER</li>
             </ul>

             </div>
        </div>
    )
}

export default Homepage;