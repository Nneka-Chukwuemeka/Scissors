'use client';

import { createContext, useContext, Context } from 'react';
import useFirbaseAuth from '@/fitebase/firebaselib';

const authUserContext = createContext({
	authUser: null,
	loading: true,
	login: async () => {},
	register: async () => {},
	signOut: async () => {},
});

export function AuthUserProvider({ children }) {
	const auth = useFirbaseAuth();
	return (
		<authUserContext.Provider value={auth}>
			{children}
		</authUserContext.Provider>
	);
}

export const useAuth = () => useContext(authUserContext);
