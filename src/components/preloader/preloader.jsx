import React from "react";
import preloader from '../../imgs/preloader.gif'

let Preloader = (props) => {
    return(
        <div >
            <img style={{height: '500px', width: '1000px'}} src={preloader} />
        </div>
    )
}

export default Preloader;