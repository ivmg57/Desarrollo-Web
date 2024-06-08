/* eslint-disable react/prop-types */
import { useState } from 'react';

const DescriptionSection = ({ descriptions, handleDeleteDescription }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + descriptions.length) % descriptions.length);
  };

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', position: 'relative' }}>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Historial de Preescripciones</h3>
      {descriptions.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '80%', // Adjusted width to fit within the container
          gap: '20px',
          alignItems: 'start',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '10px' }}>Descripción</h3>
            <div style={{ textAlign: 'justify', overflowY: 'auto', height: '150px', padding: '10px' }}>
              {descriptions[activeIndex].description}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '10px' }}>Preescripción</h3>
            <div style={{ textAlign: 'justify', overflowY: 'auto', height: '150px', padding: '10px' }}>
              {descriptions[activeIndex].prescription}
            </div>
          </div>
        </div>
      ) : (
        <p>No hay preescripciones disponibles</p>
      )}
      {descriptions.length > 0 && (
        <button
          onClick={() => handleDeleteDescription(descriptions[activeIndex].id)}
          style={{
            backgroundColor: '#FF0000',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            borderRadius: '5px',
            padding: '10px',
            marginTop: '20px',
            alignSelf: 'center'
          }}
        >
          Eliminar Descripción
        </button>
      )}
      {descriptions.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
          <button
            onClick={prevSlide}
            style={{
              backgroundColor: '#399C7E',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '50%',
              padding: '10px',
              marginRight: '10px'
            }}
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            style={{
              backgroundColor: '#399C7E',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '50%',
              padding: '10px',
              marginLeft: '10px'
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default DescriptionSection;
