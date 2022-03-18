import AppBar from '../AppBar';
import Footer from '../Footer';

function Layout(props) {
  return (
    <>
      <AppBar />

      <main>{props.children}</main>

      <Footer />
    </>
  );
}

export default Layout;
