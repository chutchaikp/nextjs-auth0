/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
// import Image from 'next/image'

export default function Profile() {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	debugger;

	return (
		user && (
			<div>
				{/* <Image src={profilePic} alt="Picture of the author" /> */}
				{/* <Image src={user?.picture || ''} alt={user?.name || ''} /> */}


				<img src={user?.picture || ""} alt={user?.name || ""} />

				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
}