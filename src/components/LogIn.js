import React from 'react'


const LogIn = (props) => (
    <nav className="login">
        <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log In with Facebook</button>
        <button className="twitter" onClick={() => props.authenticate('Twitter')}>Log In with Twitter</button>
        <button className="github" onClick={() => props.authenticate('Github')}>Log In with GitHub</button>
    </nav>
)

export default LogIn