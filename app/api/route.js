import { auth } from '@/fitebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

async function signUp(email, password) {
	let result = null,
		error = null;
	try {
		result = await createUserWithEmailAndPassword(auth, email, password);
	} catch (e) {
		error = e;
	}

	return { result, error };
}

export { signUp as POST };
