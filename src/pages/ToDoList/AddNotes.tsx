import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import AddNotes  from '../../components/AddNotes/AddNotes';
import Footer from '../../components/shared/footer/Footer';

const AddNotesPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="AddNotesPage"/>
      </IonHeader>
      <IonContent fullscreen>
        <AddNotes />
      </IonContent>
      <IonFooter>
        <Footer />
      </IonFooter>
    </IonPage>
  );
};

export default AddNotesPage;
