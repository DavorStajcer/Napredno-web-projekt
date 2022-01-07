import { Router, RouteComponentProps } from '@reach/router';
import {
  Login,
  NotFound,
  Register,
  Events,
  Event,
  Profile,
  NewEvent,
} from 'views';
import { Routes } from 'fixtures';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
    <Router>
      <RouterPage path={Routes.Events} pageComponent={<Events />} />
      <RouterPage path={Routes.Home} pageComponent={<Events />} />
      <RouterPage path={Routes.Login} pageComponent={<Login />} />
      <RouterPage path={Routes.Register} pageComponent={<Register />} />
      <RouterPage path={Routes.Event} pageComponent={<Event />} />
      <RouterPage path={Routes.Profile} pageComponent={<Profile />} />
      <RouterPage path={Routes.NewEvent} pageComponent={<NewEvent />} />
      <RouterPage path={Routes.NotFound} pageComponent={<NotFound />} />
    </Router>
  );
};
