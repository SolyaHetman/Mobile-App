import { db } from '../../Firebase';


export const remindersMethods = {
    getReminders: async (): Promise<any> => {
      const collectionRef = db.collection("notes");
  
      if (collectionRef) {
        try {
          let activeRef = await collectionRef.get();
    
          const reminders = []
          for (let reminder of activeRef.docs) {
            let data = reminder.data()
  
            const reminderItem = {
              id: reminder.id,
              title: String(data.title),
              content: data.content,
              startInterval: data.startInterval,
              endInterval: data.endInterval,
              interval: data.interval,
              repeatableNotes: data.notes,
              active: data.active
            }
    
            reminders.push(reminderItem)
          }
  
          return reminders
        } catch (err) {
          console.log('error getting items');
          return []
        }
      } else {
        return []
      }
    },
    // addItem: async (name: string, status: ItemStatus, handleAddItem: (name: string, id: string) => void): Promise<void> => {
    //   const user = firebase.auth().currentUser
  
    //   if (user) {
    //     try {
    //       let itemRef = db.collection(COLLECTIONS.USERS).doc(user.uid).collection(COLLECTIONS.ITEMS).doc()
  
    //       await itemRef.set({
    //         name,
    //         created: firebase.firestore.Timestamp.fromDate(new Date()),
    //         status
    //       });
  
    //       handleAddItem(name, itemRef.id)
  
    //       return
    //     } catch (err) {
    //       console.log('error saving Item');
    //     }
    //   } else {
    //     return
    //   }
    // },
    // editItem: async (newName: string, newStatus: ItemStatus, id: string): Promise<void> => {
    //   const user = firebase.auth().currentUser;
  
    //   if (user) {
    //     try {
    //       const ItemRef = db.collection(COLLECTIONS.USERS).doc(user.uid).collection(COLLECTIONS.ITEMS).doc(id)
  
    //       ItemRef.set({
    //         name: newName,
    //         status: newStatus
    //       }, { merge: true });
    //     } catch (err) {
    //       console.log('error editing item');
    //     }
    //   } else {
    //     return
    //   }
    // },
    deleteReminder: async (id: string): Promise<void> => {
      const collectionRef = db.collection("notes");
  
      if (collectionRef) {
        try {
          collectionRef.doc(id).delete();
        } catch (err) {
          console.log('error deleting item', err);
        }
      } else {
        return
      }
    }
  }