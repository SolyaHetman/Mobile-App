import { db } from '../../Firebase';


export const toDolistMethods = {
    getToDolist: async (): Promise<any> => {
      const collectionRef = db.collection("event");
  
      if (collectionRef) {
        try {
          let activeRef = await collectionRef.get();
    
          const notes = []
          for (let note of activeRef.docs) {
            let data = note.data();
            const time = new Date(data.date).toLocaleDateString();
  
            const noteItem = {
              id: note.id,
              title: String(data.title),
              content: data.content,
              date: time,
              importance: data.importance,
              repeatableNotes: data.repeatableNotes
            }    
            notes.push(noteItem);
          }

          return notes;
        } catch (err) {
          console.log('error getting items', err);
          return []
        }
      } else {
        return []
      }
    },
    
    addToDoList: async (data: any): Promise<void> => {
      const collectionRef = db.collection("event");
  
      if (collectionRef) {
        try {
          let itemRef = collectionRef.doc();
          await itemRef.set(data);
          return 
        } catch (err) {
          console.log('error saving Item', err );
        }
      } else {
        return 
      }
    },
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
    deleteToDoList: async (id: string): Promise<any> => {
      const collectionRef = db.collection("event");
  
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