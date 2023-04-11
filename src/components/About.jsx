import React from "react";
import aboutimage from '../images/about1.jpg' //https://pixabay.com/photos/burger-chicken-food-french-fries-7165152/
 function About (){
    return(
        <div id = "about">
            <div className="about-text">
                <h1>GREAT FOOD COMES FIRST</h1>
                <p>Every day, guests visit Chessy Burger restaurant around the world. 
                    And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 2002, 
                    Cheesy Burger is the largest fast food burger chain. We are commitment to premium ingredients, signature recipes, and family-friendly dining experiences 
                    is what has defined our brand for years.</p>
                    <button >Read More</button>
            </div>
            <div className="about-image">
                <img src ={aboutimage} alt =""/>
            </div>

        </div>
    )
 }
  export default About;