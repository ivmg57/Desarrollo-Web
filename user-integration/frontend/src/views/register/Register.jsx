import 'react';
import Header from '../../shared/Header';
import Form from './components/Form';
import formImage from '../../assets/formImage.svg';

const Register = () => {
  return (
    <div>
      <Header onSearch={() => {}} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={formImage} alt="formImage" width={700} />
        </div>
        <div style={{ width: '50%' }}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
