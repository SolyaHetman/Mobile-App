import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import './Home.css';
import Header from '../components/shared/header/Header';
import MainMenu  from '../components/MainMenu/MainMenu';
import Footer from '../components/shared/footer/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="MainPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <MainMenu />
      </IonContent>
      <IonFooter>
        <Footer />
      </IonFooter>
    </IonPage>
  );
};

export default Home;
