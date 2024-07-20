
function UserGreeting(props){
    const {isLoggedIn,username} = props;
    return (isLoggedIn ? <h2 className="welcome-msg">Welcome {username}</h2> : <h2 className="login-prompt">Please log in</h2>)
}
export default UserGreeting