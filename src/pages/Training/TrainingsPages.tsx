import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import Trainings  from '../../components/Trainings/Trainings';
import Footer from '../../components/shared/footer/Footer'

const TrainingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="TrainingsPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <Trainings exercise="Поверніть голову вправо вліво"/>
      </IonContent>
      <IonFooter>
        <Footer />
      </IonFooter>
    </IonPage>
  );
};

export default TrainingsPage;
