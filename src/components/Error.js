
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
			<div>
				<h1>Opps</h1>
				<p>Page unavaible </p>
                <h3>{err.status}</h3>
			</div>
		);
}
export default Error;