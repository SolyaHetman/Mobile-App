import React from 'react';
import {  IonCard, IonCardHeader, IonCardTitle, IonToggle  } from '@ionic/react';
import './StartTraningMenu.css';

const StartTrainingMenu : React.FC = () => (
  <>
    <IonCard className="cardExercise">
      <IonCardHeader>
        <IonCardTitle>Вправи для очей</IonCardTitle>
        <IonToggle color="danger"/>
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader>
        <IonCardTitle>Вправи для шиї</IonCardTitle>
        <IonToggle color="danger"/>
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader>
        <IonCardTitle>Вправи для спини</IonCardTitle>
        <IonToggle color="danger"/>
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader>
        <IonCardTitle>Комплекс вправ</IonCardTitle>
        <IonToggle color="danger"/>
      </IonCardHeader>
    </IonCard>
  </>
);

export default StartTrainingMenu;