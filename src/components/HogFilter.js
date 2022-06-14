import react from "react";

function HogFilter({greased, onGreaseButtonClick}) {
    return(
        <div id='hogfilter'>
            <button onClick={onGreaseButtonClick} >{greased ? "All Hogs" : "Greased Hogs Only"}</button>
        </div>
    );
}

export default HogFilter;