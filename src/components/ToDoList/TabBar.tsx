import React, { FC } from 'react';
import {  IonTabs, IonTabBar, IonTabButton, IonLabel, IonBadge, IonRouterOutlet  } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import './TabBar.css';
import ToDoList from './ToDoList';
import Reminder from './Reminder'

const TabBar: FC = () => {
  return (
    <>
    <IonTabs>
        <IonRouterOutlet>
            <Route path="/home/schedule/toDoList" component={ToDoList} exact />
            <Route path="/home/schedule/reminder" component={Reminder}  exact />
            <Route exact path="/home/schedule" render={() => <Redirect to="/home/schedule/toDoList" />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
            <IonTabButton tab="toDoList" href="/home/schedule/toDoList">
                <IonLabel>Список справ</IonLabel>
                <IonBadge>5</IonBadge>
            </IonTabButton>

            <IonTabButton tab="reminder" href="/home/schedule/reminder">
                <IonLabel>Нагадування</IonLabel>
            </IonTabButton>
        </IonTabBar>
  </IonTabs>
    </>
  );
}

export default TabBar;