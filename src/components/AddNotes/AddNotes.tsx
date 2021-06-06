import React, {useState, useEffect} from 'react';
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
  IonIcon,
  IonButtons,
  IonButton,
  IonSelect,
  IonSelectOption 
} from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';
import './AddNotes.css';
import { timeOutline, hourglassOutline } from 'ionicons/icons';
import { toDolistMethods } from '../../shared/services/ToDoListMethods';
import { remindersMethods } from '../../shared/services/RemindersMethods';

const AddNotes : React.FC = () => {
  const [repeatableNotes, setSelected] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [date, setSelectedDate] = useState<string>();
  const [importance, setImportance] = useState(0);
  const [color, onRangeChangeHandler] = useState<string>('dark');
  const [startInterval, setStartInterval] = useState<string>();
  const [endInterval, setEndInterval] = useState<string>();
  const [interval, setInterval] = useState<string>();

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

  const saveToDoList = async () => {
    const data = {
      title,
      content,
      date,
      importance,
      repeatableNotes
    };
    await toDolistMethods.addToDoList(data);
  }

  const saveReminder = async () => {
    const data = {
        title,
        content,
        startInterval,
        endInterval,
        interval,
        repeatableNotes,
        active: true
    }
    await remindersMethods.addReminder(data);
  }

  return (
    <>
      <IonList>
        <IonRadioGroup value={repeatableNotes} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Яку нотатку ви хочете створити?</IonLabel>
            </IonListHeader>
  
            <IonItem>
              <IonLabel>Подія відбудеться один раз</IonLabel>
              <IonRadio slot="start" value="false" />
            </IonItem>
  
            <IonItem>
              <IonLabel>Подія буде відбуватись кожен день</IonLabel>
              <IonRadio slot="start" value="true" />
            </IonItem>
          </IonRadioGroup>
        { repeatableNotes === 'false' &&
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
              <IonDatetime displayFormat="DDDD MMM D, YYYY" min="2005" max="2016" value={date} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
            </IonItem>
            <IonItem>
              <IonLabel>Час</IonLabel>
              <IonDatetime displayFormat="HH:mm" value={date} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
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
          <IonButton color="light" slot="end" onClick={ () => saveToDoList() }>Зберегти</IonButton> 
          </div>  
        }
        { repeatableNotes === 'true' &&
          <div>
            <IonItemDivider>Подія</IonItemDivider>
            <IonItem>
              <IonInput value={title} onIonChange={e => setTitle(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItemDivider>Додаткова інформація</IonItemDivider>
            <IonItem>
              <IonInput value={content} onIonChange={e =>setContent(e.detail.value!)} clearInput></IonInput>
            </IonItem>

            <div className="timePickerTitle">
              <span>Початок Відліку</span>
            </div>   
            <IonItem className="timePickerValue">
              <IonButtons slot="end">
                <IonButton>
                  <IonIcon slot="icon-only" icon={timeOutline}/>
                </IonButton>
              </IonButtons>
              <IonDatetime displayFormat="H:mm" value={startInterval} onIonChange={e => setStartInterval(e.detail.value!)}></IonDatetime>
            </IonItem>

            <div className="timePickerTitle">
              <span>Кінець Відліку</span>
            </div>
              <IonItem className="timePickerValue">
                <IonButtons slot="end">
                  <IonButton>
                    <IonIcon slot="icon-only" icon={timeOutline}/>
                  </IonButton>
                </IonButtons>
                <IonDatetime displayFormat="H:mm" value={endInterval} onIonChange={e => setEndInterval(e.detail.value!)}></IonDatetime>
              </IonItem>
            <div className="timePickerTitle">
              <span>Інтервал</span>
            </div>
            <IonItem className="timePickerValue">
                <IonButtons slot="end">
                  <IonButton>
                    <IonIcon slot="icon-only" icon={hourglassOutline}/>
                  </IonButton>
                </IonButtons>
                <IonSelect value={interval} placeholder={interval} onIonChange={e => setInterval(e.detail.value)}>
                  <IonSelectOption value="15 min">Кожні 15 хв</IonSelectOption>
                  <IonSelectOption value="30 min">Кожні 30 хв</IonSelectOption>
                  <IonSelectOption value="45 min">Кожні 45 хв</IonSelectOption>
                  <IonSelectOption value="1 hour">Кожні 1 год</IonSelectOption>
                  <IonSelectOption value="1 hour 15 min">Кожну 1год 15 хв</IonSelectOption>
                  <IonSelectOption value="1 hour 30 min">Кожну 1 год 30 хв</IonSelectOption>
                  <IonSelectOption value="2 hour">Кожні 2 год</IonSelectOption>
                  <IonSelectOption value="2 hour 15 min">Кожні 2 год 15 хв</IonSelectOption>
                  <IonSelectOption value="2 hour 30 min">Кожні 2 год 30 хі</IonSelectOption>
                  <IonSelectOption value="3 hour">Кожні 3 год</IonSelectOption>
                  <IonSelectOption value="3 hour 15 min">Кожні 3 год 15 хв</IonSelectOption>
                  <IonSelectOption value="3 hour 30 min">Кожні 3 год 30 хв</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonButton color="light" slot="end" onClick={ () => saveReminder() }>Зберегти</IonButton> 
          </div>
        }
      </IonList>
    </>
  );
}


export default AddNotes;