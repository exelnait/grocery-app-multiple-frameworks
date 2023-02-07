import {IUser} from "../models/IUser";
import React from "react";

const fakeAuthProvider = {
    isAuthenticated: false,
    async signIn(email: string, password: string) {
        fakeAuthProvider.isAuthenticated = true;
        return Promise.resolve();
    },
    async signOut() {
        fakeAuthProvider.isAuthenticated = false;
        return Promise.resolve();
    },
};

interface AuthContextType {
    user: IUser | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}
let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    let [user, setUser] = React.useState<IUser | null>(null);
    let signIn = (email: string, password: string) => {
        return fakeAuthProvider.signIn(email, password).then(() => {
            const newUser = { id: 'test', email };
            setUser(newUser)
        });
    };
    let signOut = () => {
        return fakeAuthProvider.signOut().then(() => {
            setUser(null);
        });
    };
    let value = { user, signIn, signOut };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}