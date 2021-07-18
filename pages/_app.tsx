import '../styles/globals.css'
// import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app'

// Error!Payload validation error: 
// 'Object didn't pass validation for format 
// absolute-https-uri-or-empty: http://localhost:3000/' on property initiate_login_uri 
// (Initiate login uri, must be https).

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />  
  return (
    // <Auth0Provider
    //   domain={'dev-9g-fm7pq.us.auth0.com'}
    //   clientId={'h9WoPFk8mYjECrDxXFGe7KuDkXerURcD'}
    //   redirectUri={'http://localhost:3000'}    
    // >
    //   <Component {...pageProps} />
    // </Auth0Provider>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
export default MyApp
