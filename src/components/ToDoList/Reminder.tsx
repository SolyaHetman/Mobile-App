import React, { FC } from 'react';
import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonIcon,
    IonButtons,
    IonButton
} from '@ionic/react';
import Header from '../shared/header/Header';
import './ToDoList.css';
import { trashOutline,pencilOutline } from 'ionicons/icons';


const reminders = [
    {
        id: 1,
        repeatableNotes: true,
        title: 'Випити стакан води',
        content: '',
        fromTime: '09:00',
        toTime: '18:00',
        interval: '3 год',
    },
    {
      id: 2,
      repeatableNotes: true,
      title: 'Закапати очі', 
      fromTime: '09:00',
      content:'',
      toTime: '18:00',
      interval: '30 хв',
    },
    {
      id: 3,
      repeatableNotes: true,
      title: 'Випити ліки', 
      content: 'Омега, вітамін D',
      fromTime: '09:00',
      toTime: '18:00',
      interval: '30 хв',
    }
]

const Reminder: FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="ReminderPage"/>
      </IonHeader>
      <IonContent fullscreen>
        { reminders.map(reminder => {
            return (
                <IonCard className="cardNotes" key={reminder.id}>
                    <IonCardHeader>
                        <div className="cardNoteHeader">
                            <IonCardTitle className="cardNoteTitle">{reminder.title}</IonCardTitle>
                            <IonButtons>
                                <IonButton className="cardNoteIcon">
                                    <IonIcon slot="icon-only" icon={pencilOutline}/>
                                </IonButton>
                                <IonButton className="cardNoteIcon">
                                    <IonIcon slot="icon-only" icon={trashOutline}/>
                                </IonButton>
                            </IonButtons>
                        </div>
                    </IonCardHeader>
                    <IonCardContent className="cardNoteContent">
                        {reminder.content}
                    </IonCardContent>
                </IonCard>
            )
        })}
      </IonContent>
    </IonPage>
  );
}

export default Reminder;