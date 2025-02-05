import { Outlet } from "react-router";

export const Content = () => {
    return (
      <main className='content'>
        <Outlet />
      </main>
    );
}