import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritePages from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

type AppScreenProps = {
  PlacesCount: number;
};

function App({PlacesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element = {<MainPage PlacesCount={PlacesCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element = {<FavoritePages/>}
        />
        <Route
          path={AppRoute.Offers}
          element = {<OfferPage/>}
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

