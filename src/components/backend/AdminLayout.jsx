import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Main from "./Main";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;