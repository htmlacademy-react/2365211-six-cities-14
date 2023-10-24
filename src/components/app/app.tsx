import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import FavoritePages from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';

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
            element = {
              <PrivateRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Root}
              >
                <LoginPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Favorites}
            element = {
              <PrivateRoute
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectTo={AppRoute.Login}
              >
                <FavoritePages/>
              </PrivateRoute>
            }
          />

          <Route path={AppRoute.Offers}>
            <Route
              index
              element={<OfferPage />}
            />

            <Route
              path={':id'}
              element={<OfferPage />}
            />
          </Route>

          <Route path="*"
            element={< NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

