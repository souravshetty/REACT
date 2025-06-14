import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
	const[btnNameReact,setBtnNameReact]=useState("Login")
	useEffect(() => {
		console.log("usestate rendered");
	}, [btnNameReact]);
    
	return (
		<div className="heading">
			<div className="logo-conatiner">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li><Link to ="/">Home</Link> </li>
					<li>
						{/*  if i use href the whole page will reload <a href="/contact">Contact</a> */}
					</li>
					<li>
						<Link to="/about"> About</Link>
					</li>
					<li>
						<Link to="/contact">contact</Link>
					</li>
					<button
						className="login"
						onClick={() => {
							btnNameReact === "login"
								? setBtnNameReact("logout")
								: setBtnNameReact("login");
						}}
					>
						{btnNameReact}
					</button>
				</ul>
			</div>
		</div>
	);
};
  
export default Header;