import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  offerCardsCount: number;
};

function App({offerCardsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage offerCardsCount={offerCardsCount} />
  );
}

export default App;
