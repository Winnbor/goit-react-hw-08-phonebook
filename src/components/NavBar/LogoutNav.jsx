import Button from 'components/Button/Button';
import './LogoutNav.scss';

export default function LogoutNav({ login = 'User' }) {
  return (
    <div className="LogoutNav">
      <span className="LogoutNav__greeting">Hello, {login}</span>
      <Button text="Log Out" />
    </div>
  );
}
