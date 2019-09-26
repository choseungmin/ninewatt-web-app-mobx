import React from 'react';
import SuperMarketTemplate from '../view/SuperMarketTemplate';
import ShopItemList from '../view/ShopItemList';
import BasketItemList from '../view/BasketItemList';
import TotalPrice from '../view/TotalPrice';

const SuperMarket = () => {
  return (
    <SuperMarketTemplate
      items={<ShopItemList />}
      basket={<BasketItemList />}
      total={<TotalPrice />}
    />
  );
};

export default SuperMarket;
