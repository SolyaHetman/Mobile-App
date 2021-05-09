import React, { FC } from 'react';
import { IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/react';
import { settingsOutline, informationCircleOutline } from 'ionicons/icons';
import './Header.css';

type Props = {
    title: string,
    page: string,
}

const Header: FC<Props> = ({ title, page }) => {
    return (
        <>
            <IonToolbar>
                {(page === "StartTrainingPage" || page === "SettingTrainingPage" || page === "ToDoListPage"|| page === "ReminderPage" || page === "AddNotesPage") && 
                <IonButtons slot="start">
                     <IonBackButton defaultHref="/"/>
                </IonButtons>  } 
                <IonTitle>{ title }</IonTitle>
                {page === "StartTrainingPage" && 
                <IonButtons slot="end">
                    <IonButton routerLink="/home/startTraining/settings">
                        <IonIcon slot="icon-only" icon={settingsOutline}/>
                    </IonButton>
                </IonButtons>}
                {(page === "MainPage" || page === "SettingTrainingPage" || page === "ToDoListPage" || page === "ReminderPage") &&
                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={informationCircleOutline}/>
                    </IonButton>
                </IonButtons>}
            </IonToolbar>
        </>
    )
}

export default Header;
