import React from 'react';
import { IonContent, IonPage, IonHeader  } from '@ionic/react';
import './Home.css';
import Header from '../components/shared/header/Header';
import MainMenu  from '../components/MainMenu/MainMenu';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Мій помічник"/>
      </IonHeader>
      <IonContent fullscreen>
        <MainMenu />
      </IonContent>
    </IonPage>
  );
};

export default Home;
