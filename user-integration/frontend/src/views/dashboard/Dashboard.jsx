import { useState, useEffect } from 'react';
import Header from '../../shared/Header';
import Card from './components/Card';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
    setFilteredUsers(data);
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleDeleteUser = async (userId) => {
    try {
      const descriptionResponse = await fetch(`http://localhost:3000/description/${userId}`);
      const descriptions = await descriptionResponse.json();

      if (descriptions.length > 0) {
        alert('No se puede eliminar el usuario porque tiene descripciones asociadas.');
        return;
      }

      const feedbackResponse = await fetch(`http://localhost:3000/feedback/${userId}`);
      const feedbacks = await feedbackResponse.json();

      if (feedbacks.length > 0) {
        alert('No se puede eliminar el usuario porque tiene retroalimentaciones asociadas.');
        return;
      }

      await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
      });
      setUsers(users.filter(user => user.id !== userId));
      setFilteredUsers(filteredUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <h1 style={{
        textAlign: 'center',
        margin: '20px 0',
      }}>
        Lista de Usuarios
      </h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px'
      }}>
        {filteredUsers.map((user) => (
          <div key={user.id} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card user={user} handleDeleteUser={handleDeleteUser} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
