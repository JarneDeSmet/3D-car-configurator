import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyB4tpvrFKB36l7bjMRA3cVKU_-bwonJrM8",
    authDomain: "car-config-48f75.firebaseapp.com",
    projectId: "car-config-48f75",
    storageBucket: "car-config-48f75.appspot.com",
    messagingSenderId: "881281183919",
    appId: "1:881281183919:web:be52d6469f463aa2fd245a",
});
export const firestore = initializeFirestore(firebaseApp, {
    localCache: persistentLocalCache(/*settings*/ { tabManager: persistentMultipleTabManager() }),
});

export const auth = getAuth(firebaseApp);
