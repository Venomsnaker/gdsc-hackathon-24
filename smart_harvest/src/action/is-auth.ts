"use server"
import { User, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/db";

export const isAuthFirebase = async () => {
    return new Promise<User | null>((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("ok")
                resolve(user)
                // ...
            } else {
                console.log("first")
                resolve(null)
            }
        });
    })
}

export const loginWithEmail = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user.user          
}