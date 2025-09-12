import React from 'react'
import { Navigate } from 'react-router-dom';

interface PrivateRouterProps {
    children: React.ReactNode;
}

export default function PrivateRouter({ children }: PrivateRouterProps) {
    const isLogin = false;

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}