/* eslint-disable react/prop-types */
import 'react';

const FormSection = ({ form, handleInputChange, handleGenerateHelp, handleSavePrescription }) => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', padding: '20px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Generador de Prescripciones Psicológicas</h3>
            <p style={{ textAlign: 'left' }}>Descripción de los Síntomas del Paciente:</p>
            <textarea
                style={{ height: '100px', width: '100%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E', marginBottom: '10px' }}
                label="Description"
                value={form.description}
                name="description"
                onChange={handleInputChange}
            />
            <p style={{ textAlign: 'left' }}>Preescripción Generada:</p>
            <textarea
                style={{ height: '100px', width: '100%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E', marginBottom: '10px' }}
                label="Prescription"
                value={form.prescription}
                name="prescription"
                onChange={handleInputChange}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px', alignSelf: 'center' }}>
                <button
                    style={{
                        height: '50px',
                        width: '48%',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                    }}
                    onClick={handleGenerateHelp}
                >
                    Generar preescripción
                </button>
                <button
                    style={{
                        height: '50px',
                        width: '48%',
                        backgroundColor: '#399C7E',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderRadius: '5px',
                    }}
                    onClick={handleSavePrescription}
                >
                    Guardar preescripción
                </button>
            </div>
        </div>
    );
};

export default FormSection;
