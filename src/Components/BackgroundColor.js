import React, { useState } from 'react'
import MyTime from './MyTime'

function BackgroundColor(){

    const color = "#80deea"
    const text = "I'm React"

    const [bg, setBg] = useState(color)
    const [txt, setTxt] = useState(text)


    const changeColor = () =>{
        
         let newColor = "#ffd54f"
         let newText = "WOW! This is my magic"

         setBg(newColor)
         setTxt(newText)

    }



    



    return(
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                   
                        <div 
                        className="col-md-6 pt-5 d-flex justify-content-center flex-column">
                            <h1>
                                <strong className="brand-name">
                                    Background Change Application
                                </strong>
                            </h1>

                            <p className="text-muted">
                            Powered by <span className="text-primary">TechLogex Solutions</span>
                            </p>

                            <div className="row">
                                <div style={{backgroundColor:bg}}
                                className="col-md-12 d-flex 
                                justify-content-center 
                                flex-column 
                                mx-auto
                                col_bg">
                                    <button 
                                    onClick={changeColor} 
                                    className="btn btn-outline-primary">{txt}</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 pt-5">
                            <MyTime />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundColor