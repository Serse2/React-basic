import React from 'react'


const LogIn = (props) => (
    <nav className="login">
        <button className="facebook" onClick={() => props.authenticate('facebook')}>Log In with Facebook</button>
        <button className="github" onClick={() => props.authenticate('github')}>Log In with GitHub</button>
    </nav>
)

export default LogIn