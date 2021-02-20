import React, { FC } from 'react'
import {  IonTitle, IonToolbar } from '@ionic/react';

type Props = {
    title: string
}

const Header: FC<Props> = ({ title }) => {
    return (
        <>
            <IonToolbar>
                <IonTitle>Title Only</IonTitle>
            </IonToolbar>
        </>
    )
}

export default Header
