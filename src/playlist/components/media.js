import React, { Component } from 'react';

class Media extends Component{
	render(){
		const styles = {
			container: {
				fontSize: "14px",
				backgroundColor: "white",
				color:"#44546b",
				fontFamily: "lato",
				cursor:"pointer",
			}
		}
		return(
			<div style={styles.container}>
				<div>
					<img src="" alt="" width={260} height={160}/>
					<h3>Estoy creando un componente de React</h3>
					<p>EduardoRasgado</p>
				</div>
			</div>
			);
	}
}

export default Media;
