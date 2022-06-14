import React, {useState} from "react";
import Nav from "./Nav";
import Hog from "./Hog";
import HogFilter from "./HogFilter";
import HogSort from "./HogSort";

import hogs from "../porkers_data";

function App() {
	const [sortInput, setSortInput] = useState("default");
	const [greased, setGreased] = useState(false);

	function handleFilter() {
		setGreased(greased => !greased)
	}

	function handleSortInputChange(event) {
		setSortInput(event.target.value);
	}

	let newArray = hogs;

	if (sortInput === "lth"){
		newArray = hogs.sort((a,b) => a.weight-b.weight);
	} else if (sortInput === "htl") {
		newArray = hogs.sort((a,b) => b.weight-a.weight);
	}

	const hogsToDisplay = newArray.filter(hog => {
		if (greased === false) {
			return true;
		} else {
			return hog.greased === true;
		}
	});


	return (
		<div className="App">
			<Nav />
			<HogSort sortInput={sortInput} onSortInputChange={handleSortInputChange}/>
			<Hog hogs={hogsToDisplay} />
			<HogFilter greased={greased} onGreaseButtonClick={handleFilter} />
		</div>
	);
}

export default App;
