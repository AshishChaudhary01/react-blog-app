import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
    <header>Header</header>
    <main>
      <Outlet ></Outlet>
    </main>
    <footer>Footer</footer>
    </>
  );
}

export default Layout;