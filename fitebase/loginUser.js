// import { auth } from './config';
// import {
// 	signInWithEmailAndPassword,
// 	createUserWithEmailAndPassword,
// } from 'firebase/auth';

// export const LoginUser = (email, password, router) => {
// 	const userAuth = auth;
// 	createUserWithEmailAndPassword(auth, email, password)
// 		.then((userCredential) => {
// 			const user = userCredential.user;
// 			console.log(user);
// 			console.log('Authentication successful');
// 			router.push('/');
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			console.log('Wrong Email/Password');
// 		});
// };
