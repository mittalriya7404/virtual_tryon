import React, { createContext } from 'react'
 export const DataContext= createContext();

export const UserContext = ({children}) => {
    const userdata={
      username:"Riya Mittal",
      age:69,
      city:"Bhopal"
    }


  return (
    <div>
        <DataContext.Provider value={userdata}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext