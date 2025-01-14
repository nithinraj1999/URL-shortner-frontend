import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { redirect } from '../services/api';
const RedirectPage: React.FC = () => {
  const { shortened } = useParams(); // Get the 'shortened' param from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if(shortened){

    
    const redirectToOriginalUrl = async () => {
      try {

        const response = await redirect(shortened)

        const data = response.data; 

        if (data.originalUrl) {
          window.location.href = data.originalUrl;
        } else {
          navigate('/404');
        }
      } catch (error) {
        console.error('Error redirecting:', error);
        navigate('/404');
      }
    };

    redirectToOriginalUrl();
  }
  }, [shortened, navigate]);

  return <div>Redirecting...</div>; 
};

export default RedirectPage;
