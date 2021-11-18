import React from 'react'
import "./machine.css"
import Machines from "../../img/3.png"
const Machine = () => {
    return (
        <div className="mc">
            <p className="mc-desc">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className="mc-img">
                <img src={Machines} alt="" />

            </div>
            <div className="mc-img-desc">
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
                </p>
            </div>
            
            <hr style={{backgroundColor: "red",height: 3,marginTop: "15px",marginLeft:"10%",marginRight:"10%"}}/>

            <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <br />
            <p>CHEMICALS & PROCESS <span style={{color:"red"}}>|</span> POWER <span style={{color:"red"}}>|</span>  WATER & WASTE WATER <span style={{color:"red"}}>|</span> OILS & GAS <span style={{color:"red"}}>|</span> PHARMA <span style={{color:"red"}}>|</span> SUGARS & DISTILLERIES <span style={{color:"red"}}>|</span> PAPER & PULP <span style={{color:"red"}}>|</span> MARINE & DEFENCE <span style={{color:"red"}}>|</span> METAL & MINING <span style={{color:"red"}}>|</span> FOOD & BEVERAGE <span style={{color:"red"}}>|</span> PETROCHEMICAL & REFINERIES <span style={{color:"red"}}>|</span> SOLAR <span style={{color:"red"}}>|</span> BUILDING <span style={{color:"red"}}>|</span> HVAC <span style={{color:"red"}}>|</span> FIRE FIGHTING <span style={{color:"red"}}>|</span> AGRICULTURE & RESIDENTIAL</p>
        </div>
    )
}

export default Machine
