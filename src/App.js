import React from "react";
import { Header } from "./func-components";
import {Contrnt , Footer} from "./Contrnt";
import Calendar from './class-components';
import Button from './class-components2';
import { EventData } from "./event-data";
import {Calculator} from './calculator';

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
			<Footer />
		</>

	)
}

export default App;
