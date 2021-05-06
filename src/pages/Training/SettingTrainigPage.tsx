import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import SettingTraining  from '../../components/SettingTraining/SettingTraining';
import Footer from '../../components/shared/footer/Footer';

const SettingTrainingPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="SettingTrainingPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <SettingTraining />
      </IonContent>
      <IonFooter>
        <Footer />
      </IonFooter>
    </IonPage>
  );
};

export default SettingTrainingPage;
