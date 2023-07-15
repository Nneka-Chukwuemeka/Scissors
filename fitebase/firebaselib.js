import { useState, useEffect } from 'react';
import { app } from './config';
import {
	getAuth,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const formatUser = (user) => ({
	uid: user.uid,
	email: user.email,
	username: user.username,
});

export default function useFirbaseAuth() {
	const auth = getAuth(app);

	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const authStateTracked = async (authState) => {
		if (!authState) {
			setAuthUser(null);
			setLoading(false);
			return;
		}
		setLoading(true);
		let user = formatUser(authState);
		setAuthUser(user);
		console.log(authUser);
		setLoading(false);
	};
	const clear = () => {
		setAuthUser(null);
		setLoading(true);
	};

	const login = async (email, password) => {
		signInWithEmailAndPassword(auth, email, password, username);
	};
	const register = async (email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
	};

	const signOut = () => auth.signOut().then(clear);

	useEffect(() => {
		const stateTrack = onAuthStateChanged(auth, authStateTracked);
		return () => stateTrack();
	}, [auth]);

	return {
		authUser,
		loading,
		login,
		register,
		signOut,
	};
}
