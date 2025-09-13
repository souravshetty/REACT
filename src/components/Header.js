import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
	const [btnNameReact, setBtnNameReact] = useState("Login");
	console.log("Header Render");
	//if no dependenvcy array then its renders everytime
	//if there is some empty dependecy array then it rendwrs only one timwe
	//if there is a dependcy array [btnNameReact]then it renders when ever the btnnAME CHANGES
	useEffect(() => {
		console.log("usestate rendered");
	});
	const onLine=useOnlineStatus();

	return (
		<div className="heading">
			<div className="logo-conatiner">
				<img className="logo" src={LOGO_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>Online Staus:{onLine ? "🟢" : "🔴"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about"> About</Link>
					</li>
					<li>
						<Link to="/grocery"> Grocery</Link>
					</li>
					<li>
						<Link to="/contact">contact</Link>
					</li>
					{/*  if i use href the whole page will reload <a href="/contact">Contact</a> */}
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
