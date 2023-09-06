import classes from "./style.module.css";
import { ReactComponent as AlertCircleIcon } from "../../../assets/images/home/alert-circle.svg";
import { ReactComponent as PaymeIcon } from "../../../assets/images/home/payme.svg";
import { ReactComponent as CardPayIcon } from "../../../assets/images/home/creditcard.svg";
import { ReactComponent as StoreIcon } from "../../../assets/images/home/store.svg";
import { ReactComponent as WatchLaterIcon } from "../../../assets/images/home/watch_later.svg";
import Bottom from "./Bottom";

type CardProps = {
  setOrders?: (e: any) => void;
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
  order: {
    id: number;
    status: string;
    price: number;
    payment: string;
    delivery: string;
    time: string;
    info: any;
  };
};

function Card({ order, orders, setOrders }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <div className={classes.flex}>
          <h3>ID: {order?.id}</h3>
          <AlertCircleIcon />
        </div>

        <div className={classes.flex}>
          <p>{order?.price} сум</p>
          {order?.payment == "payme" ? <PaymeIcon /> : <CardPayIcon />}

          <StoreIcon />
        </div>
      </div>
      <div className={classes.center}>
        {order?.info?.map((i: any, index: number) => (
          <div className={classes.info} key={index + 50}>
            <div className={classes.left}>
              <h4>{i?.piece} x </h4>
            </div>
            <div className={classes.right}>
              <h4>{i?.name}</h4>
              {i?.plus?.map((m: any, index: number) => (
                <p key={index + 100}>{m}</p>
              ))}
            </div>
          </div>
        ))}

        <div className={classes.time}>
          <p>
            <WatchLaterIcon /> {order?.time}
          </p>
        </div>
      </div>
      {order.status != "way" ? (
        <div className={classes.bottom}>
          <Bottom order={order} orders={orders} setOrders={setOrders} />
        </div>
      ) : null}
    </div>
  );
}

export default Card;
