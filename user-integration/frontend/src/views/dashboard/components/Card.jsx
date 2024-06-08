/* eslint-disable */
import { useNavigate } from "react-router";
import userImage from "../../../assets/userImage.svg";

const Card = ({ user, handleDeleteUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div
      style={{
        width: '320px',
        backgroundColor: 'white',
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        height: '150px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative'
      }}
      onClick={handleClick}
    >
      <div style={{ paddingRight: '15px' }}>
        <img src={userImage} width={50} alt="user" />
      </div>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteUser(user.id);
        }}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#FF0000',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          padding: '5px 10px'
        }}
      >
        Eliminar Usuario
      </button>
    </div>
  );
};

export default Card;
