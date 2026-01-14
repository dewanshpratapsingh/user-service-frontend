// src/auth/services/authService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";

export async function signup(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential.user;
}

export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log({userCredential});
  
  return userCredential.user;
}

export async function getIdToken(user) {
  if (!user) throw new Error("No user logged in");
  return await user.getIdToken();
}
