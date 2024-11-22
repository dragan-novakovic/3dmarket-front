import "../globals.css";

import { UserStoreProvider } from "../providers/UserContext";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <UserStoreProvider>
      <Component {...pageProps} />
    </UserStoreProvider>
  );
}
