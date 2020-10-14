import React, { useState } from 'react'

function CounterApp() {

    const [count, setCount] = useState(0);

    const plus=()=>{
        setCount(count + 1)
    }

    const minus=()=>{
        setCount(count - 1)
    }


    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 d-flex justify-content-center flex-column">
                        <h1>
                            <strong className="brand-name">
                                My Counter Application
                            </strong>
                        </h1>
                        <p className="text-muted">
                            Powered by <span className="text-primary">TechLogex Solutions</span>
                        </p>
                        <h2 className="my-3">
                        We are the team of professional developers making websites and 
                        applications. 
                    </h2>
                        <h1 className="my-3 text-center bg-warning">{count}</h1>
                        <button onClick={plus} className="btn btn-success mb-2">Increase</button>
                        <button onClick={minus} className="btn btn-danger">Decrease</button>
                    </div>


                    <div className="col-md-6 pt-5 col-img">
                        <img src="images/mycounter.jpg" className="mycounter"/>
                    </div>

                    
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterApp