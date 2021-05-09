import React, {useState} from 'react';
import { 
  IonList, 
  IonRadioGroup, 
  IonListHeader, 
  IonLabel, 
  IonItem, 
  IonRadio, 
  IonItemDivider,
  IonInput,
  IonDatetime,
  IonRange,
  IonIcon 
} from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';
import './AddNotes.css';

const AddNotes : React.FC = () => {
  const [selected, setSelected] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>('2021-12-15T13:47:20.789');
  const [importance, setImportance] = useState(0);
  const [color, onRangeChangeHandler] = useState<string>('dark');
 
  // function onRangeChangeHandler(e: any) {
  //   const importance = e.detail.value;
  //   if (importance === 1 ){
  //       color = 'success';
  //       console.log(color);
  //       console.log(importance);
  //   }

  // }

  const onIonRangeChange = (event: any) => {
    const importance = event.target.value;
    setImportance(importance);
    if (importance === 1) {
      onRangeChangeHandler('success');
    } else if (importance === 2) {
      onRangeChangeHandler('warning');
    } else if (importance === 3) {
      onRangeChangeHandler('danger');
    } else if (importance === 0) {
      onRangeChangeHandler('dark');
    }

  }

  return (
    <>
      <IonList>
        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Яку нотатку ви хочете створити?</IonLabel>
            </IonListHeader>
  
            <IonItem>
              <IonLabel>Подія відбудеться один раз</IonLabel>
              <IonRadio slot="start" value="false" />
            </IonItem>
  
            <IonItem>
              <IonLabel>Подія буде відбуватись кожень день</IonLabel>
              <IonRadio slot="start" value="true" />
            </IonItem>
          </IonRadioGroup>
        { selected === 'false' &&
          <div>    
            <IonItemDivider>Подія</IonItemDivider>
            <IonItem>
              <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItemDivider>Додаткова інформація</IonItemDivider>
            <IonItem>
              <IonInput value={content} onIonChange={e =>setContent(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Дата</IonLabel>
              <IonDatetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel>Час</IonLabel>
              <IonDatetime displayFormat="HH:mm" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
          <IonItemDivider>Оцініть важливість події від 0 до 3</IonItemDivider>
          <IonItem>
            <IonRange pin={true} value={importance}  min={0} max={3} step={1} color={color} onIonChange={onIonRangeChange}>
                <IonIcon slot="end" color= {color} icon={alertCircleOutline} />
            </IonRange>  
          </IonItem>
          <IonItem>
            <IonLabel>Значення: {importance}</IonLabel>
          </IonItem>

          </div>  
        }
      </IonList>
    </>
  );
}


export default AddNotes;