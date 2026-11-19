import firebase from "./firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const App = () => {
    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            'login_hint': 'user@gmail.com'
        });
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user.displayName);
                console.log(user.email);
                console.log(user.password);
                console.log(user.photoURL);
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


    }
    return (
        <>
            <h2> 28 Aug | Firebase database| Google Authentication | Part 1 & 2</h2>
            <button onClick={handleClick}>Click Me </button>
        </>
    )
}

export { App }