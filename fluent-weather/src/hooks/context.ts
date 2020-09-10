// import React from 'react'

// interface IState {
//   city: string
// }

// export const AppContext: React.Context<{}> = React.createContext({})

// const types = {
//   fetch_weather: 'FETCH_WEATHER'
// }

// const reducer = (state, action) => {
//   const { _city } = state

//   switch(action.type) {
//     case types.fetch_weather: {

//     }
//     default: {
//       return state
//     }
//   }
// }

// export const AppProvider = ({ children }) => {
//   const initialStates: IState = {
//     city: ''
//   }

//   const [state, dispatch] = React.useReducer(reducer, initialStates)

//   const { city } = state

//   const getWeather = (_city: string) => {
//     dispatch({
//       type: types.fetch_weather,
//       _city
//     })
//   }

//   return <AppContext.Provider>
//     { children }
//   </AppContext.Provider>
// }
