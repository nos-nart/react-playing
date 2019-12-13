import React from 'react'

export const useForm = initialStates => {
  const [values, setValues] = React.useState(initialStates)

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  ]
};
