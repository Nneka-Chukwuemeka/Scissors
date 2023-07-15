import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVptXZrfeoRqFMKD-catDV96iNJ-kfT60',
	authDomain: 'sciscors-70c20.firebaseapp.com',
	projectId: 'sciscors-70c20',
	storageBucket: 'sciscors-70c20.appspot.com',
	messagingSenderId: '580096153927',
	appId: '1:580096153927:web:3ce440610a411a705f9462',
	measurementId: 'G-4B5S7DH7GF',
};

export const app =
	getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()[0];
// const provider = new EmailAuthProvider();
// if (getApps().length < 1) {
// 	initializeApp(firebaseConfig);
// }

// const firestore = getFirestore(app);
// const auth = getAuth(app);

// // export { auth };
// // export default firestore;
