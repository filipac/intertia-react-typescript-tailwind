import React from "react";
type MainLayoutProps = {
    className?: String;
};
export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    className
}) => {
    return (
        <div className={`min-h-screen bg-gray-300 ${className}`}>
            {children}
        </div>
    );
};
