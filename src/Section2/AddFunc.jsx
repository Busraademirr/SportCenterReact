import React, { useEffect, useState } from 'react'
import Buttons from './Buttons';
import Info from './Info';

function AddFunc() {
    const [classType , setClassType]= useState("Yoga");
    const [hour, setHour]= useState("13.00 am - 15.00 am");
    const [img, setImg] = useState("/pictures/yoga.jpg");
    const [activeButton, setActiveButton] = useState("");



    const handleClick= (e)=> {
        const name = e.target.value;
        setClassType(name);
        setActiveButton(name);
        if(e.target.value=="Yoga"){
            setHour("13.00 am - 15.00 am")
            setImg("/pictures/yoga.jpg");
        }
        else if(e.target.value=="Group"){
            setHour("10.00 am - 12.00 am");
            setImg("/pictures/group.webp");
        }
        else if(e.target.value=="Solo"){
            setHour("4.00 pm - 5.30 pm");
            setImg("/pictures/solo.jpg");
        }
        else if(e.target.value=="Stretching"){
            setHour("7.30 pm - 8.30 pm");
            setImg("/pictures/stret.webp");
        }
    };


  return (
    <div>
        <Buttons handleClick= {handleClick} activeButton={activeButton}/>
        <Info img={img} hour={hour} classType={classType}/>
      </div>
  )
}

export default AddFunc