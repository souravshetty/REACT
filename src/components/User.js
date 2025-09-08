const User=(props)=>{
    return(
        <div className="user-card">
            <h2> {props.name}</h2>
            <h3>{props.location}</h3>
            <h4>Contact:Sourav@gmail.com</h4>
        </div>
    )
}
export default User;