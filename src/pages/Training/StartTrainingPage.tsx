import React from 'react';
import { IonContent, IonPage, IonHeader } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import StartTrainingMenu  from '../../components/StartTraingMenu';

const StartTrainingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="My title"/>
      </IonHeader>
      <IonContent fullscreen>
        <StartTrainingMenu />
      </IonContent>
    </IonPage>
  );
};

export default StartTrainingPage;
