import { useState } from "react";
import firebase from "./firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const App = () => {
    const handleLogIN = () => {
        const [data, setData] = useState({ name: "", email: "", url: "", islogged: false });

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
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
                // console.log(user);
                // console.log(user.email);
                // console.log(user.photoURL);
                setData({name:user.displayName,email:user.email,url:user.photoURL,islogged:true});

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
            data.isLogged?
            <>
                <h1>Hello,{data.name}</h1>
                <p>very important data </p>
                <img src={data.url} alt={data.name} />
                <button onClick={handleLogout}>Logout</button>
            </>
            :
            <>
                <h1>Welcome guest</h1>
                <p>Acces Denied <br />u have to login first to explore </p>
                <button onClick={handleLogIN}>LogIn</button>
            </>
        </>
    )
}

export { App }