/* eslint-disable @next/next/no-html-link-for-pages */
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
// 	const { loginWithRedirect } = useAuth0();

// 	return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;

import React from 'react'

interface loginProps {

}

const Login: React.FC<loginProps> = ({ }) => {
	return (
		<div>
			<a href="/api/auth/login">Login</a>
		</div>
	);
}
export default Login