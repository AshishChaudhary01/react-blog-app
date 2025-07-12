import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <aside>Sidebar</aside>
        <div class="main-wrapper">
          <Outlet></Outlet>
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default AdminLayout;