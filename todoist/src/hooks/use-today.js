import React, { useState, useEffect, createContext, useContext } from 'react';
import { firebase } from '../firebase';
import dayjs from 'dayjs';

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [today, setToday] = useState([]);
  const [overdue, setOverdue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const _today = dayjs().format('ddd DD');

  const toggleAdd = () => setIsAdding(!isAdding);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('today')
      .onSnapshot(snapshot => {
        const temp = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setToday(temp.filter(item => Object.is(item.at, _today)));
        setOverdue(temp.filter(item => !Object.is(item, _today)));
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

  const handleReschedule = () => {};

  return (
    <TodoContext.Provider
      value={{
        today,
        isAdding,
        toggleAdd,
        loading,
        add,
        remove,
        toggleDone,
        overdue,
        handleReschedule
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
