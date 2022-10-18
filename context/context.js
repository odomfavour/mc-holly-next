import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [IsGalleryModalOpen, setIsGalleryModalOpen] = useState(false)

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const openGalleryModal = () => {
    setIsGalleryModalOpen(true)
  }

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false)
  }


 
  return (
    <AppContext.Provider
      value={{
        isMobileNavOpen,
        openMobileNav,
        closeMobileNav,
        IsGalleryModalOpen,
        openGalleryModal,
        closeGalleryModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
