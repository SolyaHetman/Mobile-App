import React, { useState } from 'react';
import { IonItem, IonDatetime, IonButtons, IonButton, IonIcon, IonSelect, IonSelectOption } from '@ionic/react';
import './SettingTraining.css';
import { timeOutline, hourglassOutline } from 'ionicons/icons';

const SettingTraining : React.FC = () => {
    const [startDate, setStartDate] = useState<string>('2012-12-15T13:47:20.789');
    const [endDate, setEndDate] = useState<string>('2012-12-15T13:47:20.789');
    const [interval, setInterval] = useState<string>();

    return (
        <>
        <div className="timePickerTitle">
          <span>Початок Відліку</span>
        </div>   

        <IonItem className="timePickerValue">
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" icon={timeOutline}/>
            </IonButton>
          </IonButtons>
          <IonDatetime displayFormat="h:mm a" value={startDate} onIonChange={e => setStartDate(e.detail.value!)}></IonDatetime>
        </IonItem>

        <div className="timePickerTitle">
          <span>Кінець Відліку</span>
        </div>
          <IonItem className="timePickerValue">
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={timeOutline}/>
              </IonButton>
            </IonButtons>
            <IonDatetime displayFormat="h:mm a" value={endDate} onIonChange={e => setEndDate(e.detail.value!)}></IonDatetime>
          </IonItem>
        <div className="timePickerTitle">
          <span>Інтервал</span>
        </div>
        <IonItem className="timePickerValue">
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={hourglassOutline}/>
              </IonButton>
            </IonButtons>
            <IonSelect value={interval} placeholder={interval} onIonChange={e => setInterval(e.detail.value)}>
              <IonSelectOption value="15 min">Кожні 15 хв</IonSelectOption>
              <IonSelectOption value="30 min">Кожні 30 хв</IonSelectOption>
              <IonSelectOption value="45 min">Кожні 45 хв</IonSelectOption>
              <IonSelectOption value="1 hour">Кожні 1 год</IonSelectOption>
              <IonSelectOption value="1 hour 15 min">Кожну 1год 15 хв</IonSelectOption>
              <IonSelectOption value="1 hour 30 min">Кожну 1 год 30 хв</IonSelectOption>
              <IonSelectOption value="2 hour">Кожні 2 год</IonSelectOption>
              <IonSelectOption value="2 hour 15 min">Кожні 2 год 15 хв</IonSelectOption>
              <IonSelectOption value="2 hour 30 min">Кожні 2 год 30 хі</IonSelectOption>
              <IonSelectOption value="3 hour">Кожні 3 год</IonSelectOption>
              <IonSelectOption value="3 hour 15 min">Кожні 3 год 15 хв</IonSelectOption>
              <IonSelectOption value="3 hour 30 min">Кожні 3 год 30 хв</IonSelectOption>
            </IonSelect>
          </IonItem>
        </>
      );
}

export default SettingTraining;
