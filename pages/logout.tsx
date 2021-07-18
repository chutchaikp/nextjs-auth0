/* eslint-disable @next/next/no-html-link-for-pages */
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LogoutButton = () => {
// 	const { logout } = useAuth0();

// 	return (
// 		<button onClick={() => logout({ returnTo: window.location.origin })}>
// 			Log Out
// 		</button>
// 	);
// };

// export default LogoutButton;

import React from 'react'

const Logout = ({ }) => {
	return (
		<div>
			<a href="/api/auth/logout">Logout</a>
		</div>
	);
}
export default Logout