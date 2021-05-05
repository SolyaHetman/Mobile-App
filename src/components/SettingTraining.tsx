import React, { useState } from 'react';
import {  IonCard, IonCardHeader, IonCardTitle, IonToggle  } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonDatetime, IonFooter } from '@ionic/react';

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = [
  's\u00f8n',
  'man',
  'tir',
  'ons',
  'tor',
  'fre',
  'l\u00f8r'
];

const SettingTraining : React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<string>('2012-12-15T13:47:20.789');
    return (
        <>
              <IonItem>
                <IonLabel>DDDD MMM D, YYYY</IonLabel>
                <IonDatetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
      
              <IonItem>
                <IonLabel>Початок відліку</IonLabel>
                <IonDatetime displayFormat="h:mm a" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
              
              <IonItem>
                <IonLabel>Кінець відліку</IonLabel>
                <IonDatetime displayFormat="h:mm a" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
              </IonItem>
        </>
      );
}

export default SettingTraining;
