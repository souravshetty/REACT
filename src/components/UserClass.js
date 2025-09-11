import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render(){
        return (
					<div className="user-card" >
						<h1>Named :{this.props.name}</h1>
					</div>
				);
    }
}
export default UserClass;