import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  PlacesCount: number;
};

function App({PlacesCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage PlacesCount={PlacesCount} />
  );
}

export default App;
