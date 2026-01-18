// assets/js/auth.js
import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* ================= EMAIL AUTH ================= */

// Signup
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logout() {
  return signOut(auth);
}

// Auth state listener
export function listenAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

/* ================= GOOGLE AUTH ================= */

const googleProvider = new GoogleAuthProvider();

export function loginWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

/* ================= APPLE AUTH ================= */

const appleProvider = new OAuthProvider("apple.com");
appleProvider.addScope("email");
appleProvider.addScope("name");

export function loginWithApple() {
  return signInWithPopup(auth, appleProvider);
}
