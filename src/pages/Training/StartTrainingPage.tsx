import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import StartTrainingMenu  from '../../components/StartTraningMenu/StartTraningMenu';
import Footer from '../../components/shared/footer/Footer'

const StartTrainingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="StartTrainingPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <StartTrainingMenu />
      </IonContent>
      <IonFooter>
        <Footer />
      </IonFooter>
    </IonPage>
  );
};

export default StartTrainingPage;
