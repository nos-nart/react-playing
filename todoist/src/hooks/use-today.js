import React, { useState, useEffect, createContext, useContext } from 'react';
import { firebase } from '../firebase';

export const TodayContext = createContext({});

export const TodayProvider = ({ children }) => {
  const [today, setToday] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
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
  }, [])

  const add = (isDone, name, isEditing, timeSpend, at) => {
    return firebase
      .firestore()
      .collection('today')
      .add({
        isDone,
        name,
        isEditing,
        timeSpend,
        at
      })
  }

  return <TodayContext.Provider value={{ today, loading, add }}>
    { children }
  </TodayContext.Provider>
}

export const useToday = () => useContext(TodayContext);
