import { useEffect } from "react";
import classes from "./style.module.css";
import Card from "../Card";

type BoxProps = {
  background: string;
  title: string;
  status: string;
  orders: [
    {
      id: number;
      status: string;
      price: number;
      payment: string;
      delivery: string;
      time: string;
      info: any;
    }
  ];
  setOrders?: (e: any) => void;
};

function Box({ background, title, orders, status, setOrders }: BoxProps) {
  const countProducts = () => {
    let productCount = 0;

    orders.forEach((ordersCount) => {
      if (ordersCount.status == status) {
        productCount += 1;
      }
    });

    return productCount;
  };

  useEffect(() => {
    countProducts();
  }, [orders]);

  const productCounts = countProducts();

  return (
    <div className={classes.box}>
      <div className={classes.top} style={{ background: background }}>
        <h4>
          {title} ({productCounts})
        </h4>
      </div>
      <div className={classes.orders}>
        {orders?.map((order: any) => {
          if (order?.status == status) {
            return (
              <Card
                key={order?.id}
                order={order}
                orders={orders}
                setOrders={setOrders}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Box;
