import OfferModal from "./components/OfferModal";

function App() {

  return (
    <div className="container">

        <OfferModal>
            <h2>Только сегодня и только сейчас!</h2>
            <a href="/today/">Узнать подробнее</a>
        </OfferModal>

        <OfferModal>
            <h2>Только сегодня и только сейчас!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quis!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quis!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quis!</p>
        </OfferModal>

    </div>
  );
}

export default App;
