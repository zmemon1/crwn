import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    writeBatch,
    collection,
    query,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAMUzZ6AFGHU06uuLHPh9N7iRCYEZN9Dmw",
    authDomain: "crwn-clothing-shop-534e0.firebaseapp.com",
    projectId: "crwn-clothing-shop-534e0",
    storageBucket: "crwn-clothing-shop-534e0.appspot.com",
    messagingSenderId: "860600992786",
    appId: "1:860600992786:web:ae8b60a6867ef15a4e84cb"
};

const firebaseApp = initializeApp(firebaseConfig);

const Googleprovider = new GoogleAuthProvider();

Googleprovider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, Googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalValues = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalValues
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const createAuthUserwithEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserwithEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => { signOut(auth) }
export const onAuthStateChangedListner = (callback) => {
    onAuthStateChanged(auth, callback)
}

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
    
    const batch = writeBatch(db)
    const collectionRef = collection(db, collectionKey)

    objectToAdd.forEach(async (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log(("DONE"))
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data();
        acc[title] = items;
        return acc;
    },{})
    return categoryMap;
}