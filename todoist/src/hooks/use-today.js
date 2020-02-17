import React, { useState, useEffect, createContext, useContext } from 'react';
import { firebase } from '../firebase';

export const TodayContext = createContext({});

export const TodayProvider = ({ children }) => {
  const [today, setToday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  const toggleAdd = () => setIsAdding(!isAdding);

  useEffect(() => {
    const unsubscribe =  firebase
      .firestore()
      .collection('today')
      .onSnapshot((snapshot) => {
        const temp = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setToday(temp);
        setLoading(false)
      })
    return () => unsubscribe();
  }, [])

  const add = (name, timeSpend, at, isDone, isEditing) => {
    console.log("TCL: add -> name", name)
    return firebase
      .firestore()
      .collection('today')
      .add({
        name,
        timeSpend,
        at,
        isDone,
        isEditing
      });
  }

  const remove = (id) => {
    return firebase
      .firestore()
      .collection('today')
      .doc(`${id}`)
      .delete();
  }

  return <TodayContext.Provider value={{ 
    today,
    isAdding,
    toggleAdd,
    loading,
    add,
    remove
  }}>
    { children }
  </TodayContext.Provider>
}

export const useToday = () => useContext(TodayContext);
