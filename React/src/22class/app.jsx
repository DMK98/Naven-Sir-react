import firebase from "./firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from "react";

const App = () => {
    const [data, setdata] = useState({ name: "", email: "", url: "", isLogged: false })
    const handlelogin = () => {
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
                // console.log(user.displayName);
                // console.log(user.email);
                // console.log(user.password);
                // console.log(user.photoURL);
                setdata(
                    { name: user.displayName, email: user.email, url: user.photoURL, isLogged: true }
                )


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
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setdata({
                name: "",
                email: "",
                url: "",
                isLogged: false
            });
        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <>
            <h2> 28 Aug | Firebase database| Google Authentication | Part 1 & 2</h2>
            {/* <button onClick={handleClick}>Click Me </button> */}
            {
                data.isLogged ?
                    <>
                        <h1>hello {data.name}</h1>
                        <p>very important data for our member</p>
                        <img src={data.url} alt={data.name} /><br />
                        <input type="button" value="logout" onClick={handleLogout} />
                    </>
                    :
                    <>
                        <h1>Welcome guest</h1>
                        <p>aceessDenied</p><br />
                        <p>you have to login first </p>
                        <button onClick={handlelogin}>login</button>
                        <button onClick={handleLogout}>logout</button>
                    </>
            }
        </>
    )
}

export { App }