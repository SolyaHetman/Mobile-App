import React from 'react';
import {  IonCard, IonCardHeader, IonCardTitle, IonToggle  } from '@ionic/react';
import './StartTraningMenu.css';

const StartTrainingMenu : React.FC = () => (
  <>
  <div className="trainingMenu">
    <IonCard className="cardExercise">
      <IonCardHeader className="cardExerciseContent">
        <IonCardTitle className="cardExerciseTitle">Вправи для очей</IonCardTitle>
        <IonToggle />
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader className="cardExerciseContent">
        <IonCardTitle className="cardExerciseTitle">Вправи для шиї</IonCardTitle>
        <IonToggle/>
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader className="cardExerciseContent">
        <IonCardTitle className="cardExerciseTitle">Вправи для спини</IonCardTitle>
        <IonToggle />
      </IonCardHeader>
    </IonCard>
    <IonCard className="cardExercise">
      <IonCardHeader className="cardExerciseContent">
        <IonCardTitle className="cardExerciseTitle">Комплекс вправ</IonCardTitle>
        <IonToggle />
      </IonCardHeader>
    </IonCard>
    </div>
  </>
);

export default StartTrainingMenu;