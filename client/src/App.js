import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./components/Context/AccountProvider";

function App() {
  const clientId =
    "710853524159-3ta8ircl9prv4ilqtihc9phanriutejh.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
