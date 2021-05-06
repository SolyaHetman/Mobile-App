import React from 'react'
import { IonToolbar, IonButtons, IonIcon, IonButton } from '@ionic/react';
import { accessibilityOutline } from 'ionicons/icons';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <>
            <IonToolbar>
                <div className="footerTitle">Ми турбуємось про тебе</div>
                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon slot="icon-only" icon={accessibilityOutline}/>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </>
    )
}

export default Footer;

