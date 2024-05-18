import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <button
      className="w-[272px] h-[44px] rounded-md bg-[#02274F] font-bold text-base logoutButton mr-8 text-white"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
