import { ReactNode } from "react";
import { useAuthSelector } from "../redux/slices/auth/hook/useAuthStore";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRute = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated } = useAuthSelector((store) => store.auth);

    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={"/login"} state={{ location: location }} />;
    }

    return children;
};

export default ProtectedRute;
