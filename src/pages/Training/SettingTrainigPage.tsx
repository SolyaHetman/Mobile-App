import React from 'react';
import { IonContent, IonPage, IonHeader } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import SettingTraining  from '../../components/SettingTraining';

const SettingTrainingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="My title" page="StettingTrainingPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <SettingTraining />
      </IonContent>
    </IonPage>
  );
};

export default SettingTrainingPage;
