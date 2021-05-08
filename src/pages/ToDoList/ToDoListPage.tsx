import React from 'react';
import { IonContent, IonPage, IonHeader, IonFooter } from '@ionic/react';
import Header from '../../components/shared/header/Header';
import TabBar  from '../../components/ToDoList/TabBar';
import Footer from '../../components/shared/footer/Footer';


const ToDoListPage: React.FC = () => {
  return (
    <TabBar />
  );
};

export default ToDoListPage;
