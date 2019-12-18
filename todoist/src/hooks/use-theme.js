import React from 'react';
import storage from 'local-storage-fallback';

function modeReduder(state, action) {
    const {_mode} = action;
    switch(action.type) {
        case 'TOGGLE': {
            return {
                ...state,
                mode: _mode
            };
        }
        default: throw new Error('something went wrong')
    }
}

export const ModeContext = React.createContext({});

export const ModeProvider = ({ children }) => {
    const initState = {
        mode: storage.getItem('mode') || 'day'
    };

    const [state, dispatch] = React.useReducer(modeReduder, initState);
    const { mode } = state;

    const toggleMode = (_mode) => {
        storage.setItem('mode', _mode);
        dispatch({ type: 'TOGGLE', _mode})
    };

    return <ModeContext.Provider value={{ mode, toggleMode }}>
        { children }
    </ModeContext.Provider>
};

export const useMode = () => {
    return React.useContext(ModeContext);
};
