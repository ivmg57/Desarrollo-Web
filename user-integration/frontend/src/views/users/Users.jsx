/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../../shared/Header';
import CardSection from "./components/CardSection";
import DescriptionSection from "./components/DescriptionSection";
import FormSection from "./components/FormSection";
import RagSection from "./components/RagSection";
import FeedbackSection from "./components/FeedbackSection";

const Users = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    description: '',
    prescription: ''
  });
  const [descriptions, setDescriptions] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, setUser] = useState({});

  const fetchDescription = async () => {
    const response = await fetch('http://localhost:3000/description/' + id);
    const data = await response.json();
    setDescriptions(data);
    return data;
  }

  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:3000/feedback/' + id);
    const data = await response.json();
    setFeedbacks(data);
    return data;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm);
  }

  const fetchUserById = async () => {
    const response = await fetch('http://localhost:3000/users/' + id);
    const data = await response.json();
    setUser(data);
    return data;
  }

  const handleGenerateHelp = async () => {
    const prompt = {
      prompt: form.description,
    }
    try {
      const response = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });
      const data = await response.json();
      setForm({
        ...form,
        prescription: data.response,
      });
    } catch (error) {
      console.error('Error al generar preescripción:', error);
    }
  }

  const handleSavePrescription = async () => {
    const response = await fetch(`http://localhost:3000/description/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });
    const newDescription = await response.json();
    setDescriptions([...descriptions, newDescription]);
    setForm({ description: '', prescription: '' }); // Limpiar formulario después de guardar
  }

  const handleDeleteDescription = async (descriptionId) => {
    try {
      await fetch(`http://localhost:3000/description/${descriptionId}`, {
        method: 'DELETE',
      });
      setDescriptions(descriptions.filter(description => description.id !== descriptionId));
    } catch (error) {
      console.error('Error al eliminar descripción:', error);
    }
  }

  const handleDeleteFeedback = async (feedbackId) => {
    try {
      await fetch(`http://localhost:3000/feedback/${feedbackId}`, {
        method: 'DELETE',
      });
      setFeedbacks(feedbacks.filter(feedback => feedback.id !== feedbackId));
    } catch (error) {
      console.error('Error al eliminar feedback:', error);
    }
  }

  const handleAddFeedback = async (feedback) => {
    try {
      const response = await fetch(`http://localhost:3000/feedback/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });
      const newFeedback = await response.json();
      setFeedbacks([...feedbacks, newFeedback]);
    } catch (error) {
      console.error('Error al agregar feedback:', error);
    }
  }

  useEffect(() => {
    fetchUserById();
    fetchDescription();
    fetchFeedback();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header onSearch={() => {}} />
      <h1 style={{
        textAlign: 'center',
        margin: '20px 0',
      }}>
        Detalles del Usuario
      </h1>
      <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gridTemplateRows: '1fr 1fr', 
          gap: '20px', 
          flex: 1,
          padding: '20px',
        }}>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <CardSection user={user} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <DescriptionSection descriptions={descriptions} handleDeleteDescription={handleDeleteDescription} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <FormSection 
            form={form}
            handleInputChange={handleInputChange}
            handleGenerateHelp={handleGenerateHelp}
            handleSavePrescription={handleSavePrescription}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)' }}>
          <RagSection />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', gridColumn: 'span 2' }}>
          <FeedbackSection feedbacks={feedbacks} handleDeleteFeedback={handleDeleteFeedback} handleAddFeedback={handleAddFeedback} />
        </div>
      </div>
    </div>
  );
}

export default Users;
