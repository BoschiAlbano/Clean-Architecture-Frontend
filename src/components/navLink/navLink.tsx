import { ReactNode, useCallback } from "react";
import { NavLink as NavLinkRR } from "react-router-dom";
import { isActiveLink } from "../../utils/isActive";

const NavLink = ({
    to,
    children,
    ...props
}: {
    to: string;
    children: ReactNode;
}) => {
    const isActive = useCallback(isActiveLink, []);

    return (
        <NavLinkRR className={isActive} to={to} {...props}>
            {children}
        </NavLinkRR>
    );
};

export default NavLink;
