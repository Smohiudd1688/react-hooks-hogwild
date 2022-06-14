import react from "react";

function HogSort({sortInput, onSortInputChange}) {
    return(
        <div id="hogsort">
            <h3>Sort by Weight</h3>
            <select onChange={onSortInputChange}>
                <option value="default">As Added</option>
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
            </select>
        </div>
    );
}

export default HogSort;