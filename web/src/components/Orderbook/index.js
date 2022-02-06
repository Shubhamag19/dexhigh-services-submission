import React from 'react';
// import './styles.scss';
import Fold from '../Fold';
import OrderBookAll from './OrderbookAll';
import OrderBookBuy from './OrderbookBuy.js';
import OrderBookSell from './OrderbookSell';

const OrderBook = () => {
  return (
    <div>
      <Fold>
        <div className="grid flex-column" data-fold-item-title="ALL">
          <OrderBookAll />
        </div>
        <div className="grid flex-column" data-fold-item-title="BUY">
          <OrderBookBuy />
        </div>
        <div className="grid flex-column" data-fold-item-title="SELL">
          <OrderBookSell />
        </div>
      </Fold>
    </div>
  );
};

export default OrderBook;
