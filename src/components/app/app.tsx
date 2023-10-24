import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritePages from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
//import { AuthorizationStatus } from '../../const';

type AppScreenProps = {
  PlacesCount: number;
};

function App({PlacesCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
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
            element = <PrivateRoute authStatus={'NO_AUTH'} >
              <FavoritePages/>
            </PrivateRoute>
            // element = {<FavoritePages/>}
          />

          <Route path={AppRoute.Offers}
            element={<OfferPage />}
          />
          <Route path="*"
            element={< NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

