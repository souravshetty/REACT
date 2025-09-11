import { useState } from "react";
import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    const [count,setCount]=useState(0)
    return (
			<div>
				<h1>About page {count}</h1>
                <button onClick={()=>setCount(count+1)}>Increase Count</button>
				<User name={"sourav"} location={"CKM"}/>
                <UserClass name={"shettys"}/>
			</div>
		);

}
export default About;