import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const MainLayout: FC = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <Outlet />
      </div>
      <div>Footer</div>
    </div>
  );
};

export default MainLayout;
