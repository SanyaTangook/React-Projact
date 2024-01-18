import React from "react";
import { Header } from "./func-components";
import Calendar from './class-components'
import {Contrnt , Footer} from "./Contrnt";
import { EventData } from "./event-data";
import {Calculator} from './calculator';
import { Table } from "./event-data2";
import Button from './class-components2'
function App() {
	return (
		<>
		<Header/>
		<br/>
		<p><center><Calendar/></center></p>
		<br/>
		<Contrnt />
		<br/><hr/>
		<h2 style={{textAlign:"center"}}>Button Alert</h2>
		<br/>
		<center><Button /></center>
		<br/><hr/><br/>
		<h2 style={{textAlign:"center"}}>Button Calculator</h2><br/>
		<Calculator/>
		<br/><hr/>
		<h2 style={{textAlign:"center"}}>EventData Button</h2><br/>
		<EventData/>
		<br/><hr/>
		<h2 style={{textAlign:"center"}}>EventData Table</h2><br/>
		<Table/>
		<br/>
		<hr/>
		<Footer/>
		</>
	)
}

export default App;
