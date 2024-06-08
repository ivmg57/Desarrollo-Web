/* eslint-disable react/prop-types */
import { useState } from 'react';

const FeedbackSection = ({ feedbacks, handleDeleteFeedback, handleAddFeedback }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAdding, setIsAdding] = useState(false);
    const [newFeedback, setNewFeedback] = useState('');

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    };

    const handleAddClick = () => {
    setIsAdding(true);
    };

    const handleAddFeedbackClick = () => {
        handleAddFeedback(newFeedback);
        setNewFeedback('');
        setIsAdding(false);
    };

    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px', position: 'relative' }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Retroalimentaciones</h3>
        {feedbacks.length > 0 ? (
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            width: '80%', // Adjusted width to fit within the container
            gap: '20px',
            alignItems: 'start',
            textAlign: 'center'
            }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ marginBottom: '10px' }}>Feedback</h3>
                <div style={{ textAlign: 'justify', overflowY: 'auto', height: '150px', padding: '10px' }}>
                {feedbacks[activeIndex].feedback}
                </div>
            </div>
            </div>
        ) : (
            <p>No hay retroalimentaciones disponibles</p>
        )}
        {feedbacks.length > 0 && (
            <button
            onClick={() => handleDeleteFeedback(feedbacks[activeIndex].id)}
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
            Eliminar Retroalimentación
            </button>
        )}
        {feedbacks.length > 1 && (
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
        {isAdding ? (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <textarea
                value={newFeedback}
                onChange={(e) => setNewFeedback(e.target.value)}
                placeholder="Escribe tu retroalimentación aquí..."
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #399C7E', marginBottom: '10px' }}
            />
            <button
                onClick={handleAddFeedbackClick}
                style={{
                backgroundColor: '#399C7E',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
                padding: '10px',
                width: '100px'
                }}
            >
                Agregar
            </button>
            </div>
        ) : (
            <button
            onClick={handleAddClick}
            style={{
                backgroundColor: '#399C7E',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '20px',
                alignSelf: 'center'
            }}
            >
            Agregar nueva retroalimentación
            </button>
        )}
        </div>
    );
};

export default FeedbackSection;
