import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from '../components/shared/header/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header title="Test title"/>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
