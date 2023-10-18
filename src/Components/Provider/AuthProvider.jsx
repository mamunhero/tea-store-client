import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase-config";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  // user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user
   const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }
  const authInfo = {
    user,
    loading,
    createUser
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

