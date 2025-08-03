import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="position-fixed  w-100 h-100 d-flex justify-content-center align-items-center authentication-background"
      style={{
        top: 0,
        left: 0,
        zIndex: 2000,
      }}
    >
      <div className="container-lg">{children}</div>
    </div>
  );
};

export default AuthLayout;
