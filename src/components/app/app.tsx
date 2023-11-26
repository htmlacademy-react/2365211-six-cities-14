import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import FavoritePages from '../../pages/favorite-page/favorite-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';

import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../../components/layout/layout';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Offer from '../../types/offer';

import { AppRoute, AuthStatus } from '../../const';

type AppScreenProps = {
  offers: Array<Offer>;
};

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={'/'} element={<Layout />} >
            <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
            <Route path={AppRoute.Login} element={
              <PrivateRoute restrictedFor={AuthStatus.Unknown} redirectTo={AppRoute.Main} >
                <LoginPage />
              </PrivateRoute>
            }
            />

            <Route path={AppRoute.Favorite} element={
              <PrivateRoute restrictedFor={AuthStatus.Unknown} redirectTo={AppRoute.Login} >
                <FavoritePages offers={offers} />
              </PrivateRoute>
            }
            />
            <Route path={AppRoute.Offer}>
              <Route index element={<OfferPage offers={offers}/>} />
              <Route path={':offerId'} element={<OfferPage offers={offers} />} />
            </Route>

            <Route path={AppRoute.Offer} element={<OfferPage offers={offers}/>} />
            <Route path='/*' element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

