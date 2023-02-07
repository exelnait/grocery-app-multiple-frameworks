import {useAuth} from "../providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}