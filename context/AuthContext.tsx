import { 
    PropsWithChildren, 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from 'react';
import { useRouter, useSegments } from 'expo-router';
import * as SecureStore from 'expo-secure-store' //means to import everything from it

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

    useEffect(() => {
        const loadAuthToken = async () => {
            const response = await SecureStore.getItemAsync('authToken')
            if (response) {
                setAuthToken(response)
            }
            setAuthToken(response)
        }
        loadAuthToken()
    }, [])

    const updateAuthToken = async (newToken: string) => {
        await SecureStore.setItemAsync('authToken', newToken);
        setAuthToken(newToken);
      };

    const removeAuthToken = async () => {
        await SecureStore.deleteItemAsync('authToken');
        setAuthToken(null);
      };

    return (
        <AuthContext.Provider value={{authToken, updateAuthToken, removeAuthToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext)