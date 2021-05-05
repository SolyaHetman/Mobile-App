import React, { FC } from 'react'
import { IonTitle, IonToolbar, IonButtons, IonBackButton, IonIcon, IonButton } from '@ionic/react';
import { settingsOutline } from 'ionicons/icons';
import './Header.css';

type Props = {
    title: string
}

const Header: FC<Props> = ({ title }) => {
    return (
        <>
            <IonToolbar>
                {/* <IonButtons slot="start">
                     <IonBackButton defaultHref="/"/>
                </IonButtons> */}
                <div text-center>
                    <IonTitle text-center>{ title }</IonTitle>
                </div>
                {/* <IonButtons slot="end">
                    <IonButton routerLink="/home/startTraining/settings">
                        <IonIcon slot="icon-only" icon={settingsOutline}/>
                    </IonButton>
                </IonButtons> */}
            </IonToolbar>
        </>
    )
}

export default Header;
