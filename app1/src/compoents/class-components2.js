import React , {Component} from "react";

export default class Button extends Component{
	showAlert(msg){ 
		alert(msg) 
	}
	onClickButtonOK=()=>{
		this.showAlert("Hello. Welcome To React & ReactNative")
	}
	render(){
		return <button on onClick={this.onClickButtonOK} > ClickHere </button>
	}
}
