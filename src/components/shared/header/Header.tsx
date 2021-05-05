import React, { FC } from 'react'
import { IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';

type Props = {
    title: string
}

const Header: FC<Props> = ({ title }) => {
    return (
        <>
            <IonToolbar>
                <IonButtons slot="start">
                     <IonBackButton defaultHref="/"/>
                </IonButtons>
                <IonTitle>Твій помічник</IonTitle>
                <IonButtons slot="end">
                    <IonButton routerLink="/home/startTraining/settings">
                        <IonIcon slot="icon-only" icon={settingsOutline}/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </>
    )
}

export default Header;
