import React from "react";
import { Header } from "./func-components";
import {Contrnt , Footer} from "./Contrnt";
import Calendar from './class-components';
function App() {
	return (
		<>
			<Header />
			<center> <Calendar /> </center> 
			<Contrnt/>	
			<Footer />
		</>

	)
}

export default App;
