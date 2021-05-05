import React from 'react';
import {  IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

const MainMenu: React.FC = () => (
  <>
       <IonCard>
        <IonCardHeader>
          <IonCardTitle>Список справ</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Додати нагадування</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard routerLink='/home/startTraining'>
        <IonCardHeader>
          <IonCardTitle>Розпочати тренування</IonCardTitle>
        </IonCardHeader>
      </IonCard>
  </>
);

export default MainMenu;