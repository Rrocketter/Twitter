import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';

const AuthContext = createContext({})

const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [authToken, setAuthToken] = useState<string | null>(null)
    const segments = useSegments()
    const router = useRouter()

    useEffect(() => {
        const isAuthGroup = segments[0] == '(auth)'

        if (!authToken && !isAuthGroup) {
            router.replace('/signIn')
        } 
        if (authToken && isAuthGroup) {
            router.replace('/feed')

        }
    }, [segments, authToken])

    return (
        <AuthContext.Provider value={{authToken, setAuthToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext)