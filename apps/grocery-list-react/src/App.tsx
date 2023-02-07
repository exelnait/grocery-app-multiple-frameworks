import React from 'react';
import './App.css';

import {Outlet, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./providers/AuthProvider";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {RequireAuth} from "./components/RequiresAuth";

function App() {
  return (
    <AuthProvider>
        <Routes>
            <Route element={<Outlet />}>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <HomePage />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    </AuthProvider>
  );
}

export default App;
