import React, { FC } from 'react';
import { IonButtons, IonButton,IonIcon } from '@ionic/react';
import { stopwatchOutline } from 'ionicons/icons';
import './Trainings.css';

//https://www.youtube.com/watch?v=_03VKmdrxV8

type Props = {
    exercise: string
}
const Trainings: FC<Props> = ({ exercise }) => {
  return (
    <>
    <div className="trainingContent">
        <span className="trainingValue">{exercise}</span>
        <IonButtons className="timerIcon">
              <IonButton>
                <IonIcon slot="icon-only" icon={stopwatchOutline}/>
              </IonButton>
        </IonButtons>
        <span className="timer">05:00</span>
        <IonButton className="nextButton">Наступна вправа</IonButton>
    </div>
    </>
  );
}

export default Trainings;