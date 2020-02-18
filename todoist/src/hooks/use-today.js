import React, { useState, useEffect, createContext, useContext } from 'react';
import { firebase } from '../firebase';
import dayjs from 'dayjs';

export const TodayContext = createContext({});

export const TodayProvider = ({ children }) => {
  const [today, setToday] = useState([]);
  const [outDate, setOutDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const t = dayjs().format('ddd DD');

  const toggleAdd = () => setIsAdding(!isAdding);

  // db.collection("cities").where("state", "==", "CA")
  //   .onSnapshot(function(querySnapshot) {
  //       var cities = [];
  //       querySnapshot.forEach(function(doc) {
  //           cities.push(doc.data().name);
  //       });
  //       console.log("Current cities in CA: ", cities.join(", "));
  //   });
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('today')
      .onSnapshot(snapshot => {
        const temp = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setToday(temp.filter(x => Object.is(x.at, t)));
        setLoading(false);
      });
    return () => unsubscribe();
  }, []);

  const add = (name, at, isDone, isEditing) => {
    return firebase
      .firestore()
      .collection('today')
      .add({
        name,
        at,
        isDone,
        isEditing
      });
  };

  const remove = id => {
    return firebase
      .firestore()
      .collection('today')
      .doc(`${id}`)
      .delete();
  };

  const toggleDone = id => {
    return firebase
      .firestore()
      .collection('today')
      .doc(`${id}`)
      .update();
  };

  return (
    <TodayContext.Provider
      value={{
        today,
        isAdding,
        toggleAdd,
        loading,
        add,
        remove,
        toggleDone
      }}
    >
      {children}
    </TodayContext.Provider>
  );
};

export const useToday = () => useContext(TodayContext);
