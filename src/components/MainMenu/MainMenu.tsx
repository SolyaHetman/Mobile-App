import React from 'react';
import {  IonCard, IonCardHeader, IonCardTitle} from '@ionic/react';
import './MainMenu.css';

const MainMenu: React.FC = () => {
  return (
    <>
    <div className="mainMenu">
      <div>
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
      </div>  
    </div>
    </>
  );
}

export default MainMenu;