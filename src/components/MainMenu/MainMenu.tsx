import React from 'react';
import {  IonCard, IonCardHeader, IonCardTitle} from '@ionic/react';
import './MainMenu.css';

const MainMenu: React.FC = () => {
  return (
    <>
    <div className="mainMenu">
      <div>
         <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle className="mainTitleMenu">Список справ</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card">
          <IonCardHeader>
            <IonCardTitle className="mainTitleMenu">Додати нагадування</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="card" routerLink='/home/startTraining'>
          <IonCardHeader>
            <IonCardTitle className="mainTitleMenu">Розпочати тренування</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </div>  
    </div>
    </>
  );
}

export default MainMenu;