import React from "react";

const Bootstrap = ({name, desc, btn, img}) =>{
    return(
        <>
           <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="cards">
                            <div className="img">
                                <img src={img} alt={img} height={'190px'} width={'100%'}></img>
                                <h3>{name}</h3>
                                <span>{desc}</span>
                                <div className="btn">
                                    <button>{btn}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Bootstrap