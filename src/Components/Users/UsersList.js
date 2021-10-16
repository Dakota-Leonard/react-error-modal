import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = props => {
  let id = 0;
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map(user => (
          <li key={id++}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
