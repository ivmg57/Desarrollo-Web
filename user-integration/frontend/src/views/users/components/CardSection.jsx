/*eslint react/prop-types: 0*/
import userImage from "../../../assets/userImage.svg";

const CardSection = ({ user }) => {
  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
      <img src={userImage} width={80} alt="avatar" style={{ marginBottom: '20px' }} />
      <div style={{ textAlign: 'left' }}>
        <p><strong>Nombre</strong></p>
        <p>{user.name}</p>
        <p><strong>Email</strong></p>
        <p>{user.email}</p>
        <p><strong>Teléfono</strong></p>
        <p>{user.phone_number}</p>
        <p><strong>Dirección</strong></p>
        <p>{user.address}</p>
        <p><strong>Fecha de Nacimiento</strong></p>
        <p>{user.birth_date}</p>
        <p><strong>Género</strong></p>
        <p>{user.gender}</p>
      </div>
    </div>
  );
}

export default CardSection;
