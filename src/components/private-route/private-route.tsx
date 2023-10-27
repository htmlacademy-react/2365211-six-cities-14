import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
}

export default function PrivateRoute({children, restrictedFor, redirectTo}:
   PrivateRouteProps): JSX.Element {
  return restrictedFor === AuthorizationStatus.NoAuth ? <Navigate to={redirectTo} /> : children;
}
