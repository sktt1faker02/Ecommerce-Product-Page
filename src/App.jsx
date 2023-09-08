import NavMenu from "./components/NavMenu";
import ProductSlider from "./components/ProductSlider";

const headerMenu = ["Collections", "Men", "Women", "About", "Contact"];

const App = () => {
  // For Reference only to check if the nav is active
  // const [isNavActive, setIsNavActive] = useState(false);

  // const handleClickMenu = (navActive) => {
  //   setIsNavActive(navActive);
  // };

  return (
    <>
      <header>
        <NavMenu menus={headerMenu} />
        <ProductSlider />
      </header>

      <main></main>
    </>
  );
};

export default App;
