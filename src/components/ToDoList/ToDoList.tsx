import React, { FC, useEffect, useState } from 'react';
import { 
    IonPage, 
    IonContent, 
    IonHeader, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonCardSubtitle,
    IonIcon,
    IonButtons,
    IonButton
} from '@ionic/react';
import Header from '../shared/header/Header';
import './ToDoList.css';
import { trashOutline,pencilOutline } from 'ionicons/icons';
import { toDolistMethods } from '../../shared/services/ToDoListMethods';

const ToDoList: FC = () => {
    const [toDoList, setToDoList] = useState<any[]>([]);

    const fetchToDoList = async () => {
        const newToDoList = await toDolistMethods.getToDolist(); 
        setToDoList(newToDoList);
    }

    const deleteItem = (id: any) => {
        toDolistMethods.deleteToDoList(id);
        
        const newRemiders = [...toDoList];
        newRemiders.splice(newRemiders.findIndex(i => i.id === id), 1);
    
        setToDoList(newRemiders);
      }

    useEffect(() => {
        fetchToDoList();
      }, [])

  return (
    <IonPage>
      <IonHeader>
          <Header title="Твій помічник" page="ToDoListPage"/>
      </IonHeader>
      <IonContent fullscreen>
        { toDoList.map(toDoListItem => {
            return (
                <IonCard className="cardNotes" key={toDoListItem.id}>
                    <IonCardHeader>
                        <div className="cardNoteHeader">
                            <IonCardTitle className="cardNoteTitle">{toDoListItem.title}</IonCardTitle>
                            <IonButtons>
                                <IonButton className="cardNoteIcon">
                                    <IonIcon slot="icon-only" icon={pencilOutline}/>
                                </IonButton>
                                <IonButton className="cardNoteIcon" onClick={(e: any) => deleteItem(toDoListItem.id)}>
                                    <IonIcon slot="icon-only" icon={trashOutline}/>
                                </IonButton>
                            </IonButtons>
                        </div>
                        <IonCardSubtitle className="cardNoteSubTitle" >{toDoListItem.date}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent className="cardNoteContent">
                        {toDoListItem.content}
                    </IonCardContent>
                </IonCard>
            )
        })}
      </IonContent>
    </IonPage>
  );
}

export default ToDoList;