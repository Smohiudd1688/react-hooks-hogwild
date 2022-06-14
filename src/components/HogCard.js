import react, {useState} from "react";

function HogCard({name, image, specialty, weight, greased, medal}) {
    const [isClick, setIsClick] = useState(false);

    function handleClick() {
        setIsClick(isClick => !isClick);
    }

    const DisplayExtra = () => {
        return (
            <>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased.toString()}</p>
                <p>Highest Medal Achieved: {medal}</p>
            </>
        );
    }

    return (
        <div onClick={handleClick} className="pigTile" >
            <h3>{name}</h3>
            <img src={image} />
            {isClick ? <DisplayExtra /> : null}
        </div>
    );
}


export default HogCard;