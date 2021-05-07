import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.slice';

const UserHome = () => {
  const currUser = useSelector(selectCurrentUser);

  return <div>Welcome back, {currUser.email}!</div>;
};

export default UserHome;
