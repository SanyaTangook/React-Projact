import React from "react";
import { Header } from "./func-components";
import {Contrnt , Footer} from "./Contrnt";
import Calendar from './class-components';
import Button from './class-components2';

function App() {
	return (
		<>
			<Header />
			<center> <Calendar /> </center> 
			<Contrnt/>	
			<center> <Button /> </center>
			<br/>
			<br/>
			<Footer />
		</>

	)
}

export default App;
