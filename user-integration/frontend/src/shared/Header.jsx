/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
      <h1 style={{ margin: 0, cursor: 'pointer' }} onClick={() => navigate('/')}>
        Inicio
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {location.pathname === '/' && (
          <input
            type="text"
            placeholder="Buscar usuarios..."
            onChange={handleSearchChange}
            style={{ height: '30px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }}
          />
        )}
        <button onClick={() => navigate('/register')} style={{ backgroundColor: '#399C7E', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default Header;
