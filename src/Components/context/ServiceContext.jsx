import React, { createContext, useState } from 'react';

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  // para conectar el navbar con la lista del servicio y .active
  const [selectedService, setSelectedService] = useState(null);

  return (
    <ServiceContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </ServiceContext.Provider>
  );
};
