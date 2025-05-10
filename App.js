
	
    // if u have to make a nested html in react like
    //  <div id="parent">
	// 			<div id="child">
    //                 <h1>I am a tag</h1>
    //             </div>
	// 		</div>;
    
   
   
  const heading = React.createElement(
		"div",
		{ id: "parent" },
		React.createElement("div", { id: "child" }, [
			React.createElement("h1", {}, "I am a tag"),
			React.createElement("h2", {}, "I am a tag h2"),
		])
	);
        console.log(heading);
  const root=ReactDOM.createRoot(document.getElementById("root"));
	root.render(heading);
   
   
   
//    Original(it takes 3 attributes )
    // const heading= React.createElement(
    //     "h1",{
    //    id:"heading"
    // },"hello react"); const
	// root=ReactDOM.createRoot(document.getElementById("root"));
	// root.render(heading);

