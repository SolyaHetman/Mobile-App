import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import Header from '../components/shared/header/Header';
import MainMenu  from '../components/MainMenu';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header title="My title"/>
        <MainMenu />
      </IonContent>
    </IonPage>
  );
};

export default Home;
