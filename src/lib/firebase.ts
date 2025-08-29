import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace this with your actual Firebase project configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:1234567890abcdef",
};

let app;
let db: ReturnType<typeof getFirestore> | undefined;

// This check prevents re-initializing the app and provides a clear warning if not configured.
if (firebaseConfig.projectId && firebaseConfig.projectId !== "your-project-id") {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
} else {
  console.warn("Firebase is not configured. Please update src/lib/firebase.ts with your project credentials to enable click tracking.");
}

export { app, db };
