import react from "react";
import HogCard from "./HogCard";

function Hog({hogs}) {
    const hogDisplay = hogs.map(hog => {
        return <HogCard className="ui eight wide column" 
                        key={hog.name} 
                        name={hog.name} 
                        image={hog.image} 
                        specialty={hog.specialty}
                        weight={hog.weight}
                        greased={hog.greased}
                        medal={hog["highest medal achieved"]} />
    });
   
    return (
        <div className="ui grid container">
            {hogDisplay}
        </div>
    );
}

export default Hog;