import React, { createContext, useState, useEffect } from 'react';

export const HouseContext = createContext(null);

const LOCAL_STORAGE_KEY_WISHLIST = "WishlistPart";
const LOCAL_STORAGE_KEY_CART = "CartPart";

export const HouseContextProvider = (props) => {
  const [houseItems, setHouseItems] = useState([]); // مقداردهی به آرایه خالی
  const [insuranceItems, setInsuranceItems] = useState([]); // مقداردهی به آرایه خالی

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY_WISHLIST);
    setHouseItems(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_WISHLIST, JSON.stringify(houseItems));
  }, [houseItems]);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY_CART);
    setInsuranceItems(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(insuranceItems));
  }, [insuranceItems]);

  const removeFromWish = (itemId) => {
    setHouseItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const resetFromWish = () => {
    setHouseItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY_WISHLIST);
  };

  const addToWish = (itemId) => {
    if (!houseItems?.find((item) => item.id === itemId)) {
      setHouseItems([...houseItems, { id: itemId, count: 1 }]);
    } else {
      setHouseItems(
        houseItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        })
      );
    }
  };

  const addToCart = (itemId, meterValue) => {
    if (meterValue !== undefined) {
      setInsuranceItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.id === itemId);
        if (itemExists) {
          return prevItems;
        } else {
          return [...prevItems, { id: itemId, count: 1, meterValue }];
        }
      });
    }
  };

  const removeFromCart = (itemId) => {
    setInsuranceItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(insuranceItems));
  };

  const contextValue = {
    houseItems,
    addToWish,
    removeFromWish,
    resetFromWish,
    addToCart,
    removeFromCart,
    insuranceItems,
  };

  return (
    <HouseContext.Provider value={contextValue}>
      {props.children}
    </HouseContext.Provider>
  );
};
