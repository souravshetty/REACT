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
		<div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
			<div className="logo-conatiner">
				<img className="w-46" src={LOGO_URL} />
			</div>
			<div className="flex items-center px-10">
				<ul className="flex">
					<li className="px-4">Online Staus:{onLine ? "🟢" : "🔴"}</li>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about"> About</Link>
					</li>
					<li className="px-4">
						<Link to="/grocery"> Grocery</Link>
					</li>
					<li className="px-4">
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
