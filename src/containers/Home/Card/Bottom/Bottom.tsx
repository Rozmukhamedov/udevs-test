import classes from "./style.module.css";
import { Button } from "../../../../components";

type BottomProps = {
  setOrders?: any;
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

function Bottom({ order, orders, setOrders }: BottomProps) {
  const removeOrder = (e: number) => {
    const filtered = orders.filter((el) => el.id != e);
    setOrders(filtered);
  };

  const nextStep = (e: number, status: string) => {
    let filteredOrders = orders.filter((el) => el.id != e);
    let filtered = orders.filter((el) => el.id == e);
    filtered[0].status = status;
    setOrders([...filteredOrders, ...filtered]);
  };

  if (order?.status == "ready") {
    return (
      <div className={classes.bottom}>
        <Button
          className={classes.next}
          type="button"
          onClick={() => nextStep(order?.id, "way")}
        >
          Завершить
        </Button>
      </div>
    );
  }

  if (order?.status == "blank") {
    return (
      <div className={classes.bottom}>
        <Button
          className={classes.next}
          type="button"
          onClick={() => nextStep(order?.id, "ready")}
        >
          Готово
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.bottom}>
      <Button
        className={classes.delete}
        type="button"
        onClick={() => removeOrder(order?.id)}
      >
        Отменить
      </Button>
      <Button
        className={classes.next}
        type="button"
        onClick={() => nextStep(order?.id, "blank")}
      >
        Принять
      </Button>
    </div>
  );
}

export default Bottom;
