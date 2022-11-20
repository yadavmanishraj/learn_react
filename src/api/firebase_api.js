import {signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase';

async function signIn(email, password) {
    return (await signInWithEmailAndPassword(auth, email, password)).user;
}

async function createAccount(email, password) {
    return  (await createUserWithEmailAndPassword(auth, email, password)).user;
}

onAuthStateChanged(auth, (user) => {
    console.log(user);
})

export {signIn, createAccount}