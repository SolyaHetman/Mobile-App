import React, { FC, useEffect, useState } from 'react';
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
    IonButton,
    IonToggle
} from '@ionic/react';
import Header from '../shared/header/Header';
import './ToDoList.css';
import { trashOutline,pencilOutline } from 'ionicons/icons';
import { remindersMethods } from '../../shared/services/RemindersMethods';


const Reminder: FC = () => {
    const [reminders, setReminders] = useState<any[]>([]);

    const fetchReminders = async () => {
        const newRemiders = await remindersMethods.getReminders(); 
        setReminders(newRemiders);
    }

    const deleteItem = (id: any) => {
        remindersMethods.deleteReminder(id);
        
        const newRemiders = [...reminders];
        newRemiders.splice(newRemiders.findIndex(i => i.id === id), 1);
    
        setReminders(newRemiders);
      }

    useEffect(() => {
        fetchReminders();
      }, [])
      
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
                                <div>
                                    <IonCardTitle className="cardNoteTitle">{reminder.title}</IonCardTitle>
                                    <IonToggle checked={reminder.active} />
                                </div>        
                                <IonButtons>
                                    <IonButton className="cardNoteIcon">
                                        <IonIcon slot="icon-only" icon={pencilOutline}/>
                                    </IonButton>
                                    <IonButton className="cardNoteIcon" onClick={(e: any) => deleteItem(reminder.id)}>
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