import React, { useState } from "react";


const TrafficLight = () => {

    const [selected, setSelected] = useState("red")

    const changeColor = (color) => {
        setSelected(color)
    }
    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">
                <div className={`red ${selected == "red" ? "light-on" : ""}`} onClick={() => changeColor("red")}>

                </div>
                <div className={`yellow ${selected == "yellow" ? "light-on" : ""}`} onClick={() => changeColor("yellow")}>

                </div>
                <div className={`green ${selected == "green" ? "light-on" : ""}`} onClick={() => changeColor("green")}>

                </div>
            </div>

        </main>
    )
}

export default TrafficLight

