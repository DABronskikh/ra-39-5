import TodayOfferModal from "./components/TodayOfferModal";
import DiscountOfferModal from "./components/DiscountOfferModal";
import OfferModal from "./components/OfferModal";


function App() {


  return (
    <div className="container">
        <TodayOfferModal />
        <DiscountOfferModal />

        <OfferModal
            title="Только сегодня и только сейчас!"
            link="/today/"
        />

        <OfferModal
            title="Самые большие скидки!"
            link="/discount/"
        />


    </div>
  );
}

export default App;
