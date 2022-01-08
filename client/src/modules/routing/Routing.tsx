import { Router, RouteComponentProps } from '@reach/router';
import {
  Login,
  NotFound,
  Register,
  Events,
  Profile,
  EditProfile,
  EditPassword,
  Reservations,
  MyEvents,
  EditEvent,
  CreateEvent,
  SingleEvent,
} from 'views';
import { Routes } from 'fixtures';

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent;

export const Routing: React.FC = () => {
  return (
    <Router>
      <RouterPage path={Routes.Login} pageComponent={<Login />} />
      <RouterPage path={Routes.Register} pageComponent={<Register />} />
      <RouterPage path={Routes.Home} pageComponent={<Events />} />
      <RouterPage path={Routes.Profile} pageComponent={<Profile />} />
      <RouterPage path={Routes.EditProfile} pageComponent={<EditProfile />} />
      <RouterPage path={Routes.EditPassword} pageComponent={<EditPassword />} />
      <RouterPage path={Routes.Reservations} pageComponent={<Reservations />} />
      <RouterPage path={Routes.MyEvents} pageComponent={<MyEvents />} />
      <RouterPage path={Routes.EditEvent} pageComponent={<EditEvent />} />
      <RouterPage path={Routes.CreateEvent} pageComponent={<CreateEvent />} />
      <RouterPage path={Routes.Event} pageComponent={<SingleEvent />} />
      <RouterPage path={Routes.NotFound} pageComponent={<NotFound />} />
    </Router>
  );
};
