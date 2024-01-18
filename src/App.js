import React from "react";
import { Header } from "./func-components";
import {Contrnt , Footer} from "./Contrnt";
import { EventData } from "./event-data";
import {Calculator} from './calculator';
import { Table } from "./event-data2";

function App() {
	return (
		<>
			<Header />
			<Contrnt/>	
			<br/>
			<br/>
			<EventData />
			<br/>
			<br/>
			<Table />
			<Footer />
		</>

	)
}

export default App;
