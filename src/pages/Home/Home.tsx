import { useState } from "react";
import classes from "./style.module.css";
import { Input } from "../../components";
import { ReactComponent as SearchIcon } from "../../assets/images/SearchIcon.svg";
import { ReactComponent as TotalIcon } from "../../assets/images/TotalIcon.svg";
import { ReactComponent as TimeIcon } from "../../assets/images/TotalIcon.svg";
import { Box } from "../../containers";

function Home() {
  const [orders, setOrders] = useState<any>([
    {
      id: 111111,
      status: "new",
      price: 300560,
      payment: "payme",
      delivery: "delivery",
      time: "15:22",
      info: [
        {
          piece: 3,
          name: "Пепси 0,5",
          plus: [],
        },
      ],
    },
    {
      id: 8888888,
      status: "new",
      price: 300560,
      payment: "card",
      delivery: "delivery",
      time: "15:22",
      info: [
        {
          piece: 3,
          name: "Пепси 0,5",
          plus: [],
        },
        {
          piece: 1,
          name: "Пепси 0,5",
          plus: ["С сыром", "Без лука"],
        },
        {
          piece: 2,
          name: "Лаваш мясной Standart острый",
          plus: ["С сыром", "Без лука"],
        },
      ],
    },
    {
      id: 333333,
      status: "blank",
      price: 300560,
      payment: "card",
      delivery: "delivery",
      time: "15:22",
      info: [
        {
          piece: 3,
          name: "Пепси 0,5",
          plus: [],
        },
        {
          piece: 1,
          name: "Пепси 0,5",
          plus: ["С сыром", "Без лука"],
        },
        {
          piece: 2,
          name: "Лаваш мясной Standart острый",
          plus: [],
        },
      ],
    },
    {
      id: 222222,
      status: "ready",
      price: 300560,
      payment: "payme",
      delivery: "delivery",
      time: "15:22",
      info: [
        {
          piece: 3,
          name: "Пепси 0,5",
          plus: [],
        },
        {
          piece: 1,
          name: "Пепси 0,5",
          plus: ["С сыром", "Без лука"],
        },
        {
          piece: 2,
          name: "Лаваш мясной Standart острый",
          plus: [],
        },
      ],
    },
    {
      id: 444444,
      status: "way",
      price: 300560,
      payment: "payme",
      delivery: "delivery",
      time: "15:22",
      info: [
        {
          piece: 3,
          name: "Пепси 0,5",
          plus: [],
        },
        {
          piece: 1,
          name: "Пепси 0,5",
          plus: ["С сыром", "Без лука"],
        },
        {
          piece: 2,
          name: "Лаваш мясной Standart острый",
          plus: [],
        },
      ],
    },
  ]);

  const [newOrder, setNewOrder] = useState<any>([]);

  const searchOrder = (e: number) => {
    const filtered = orders.filter((el: any) => el.id == e);
    setNewOrder(filtered);
  };

  return (
    <div className={classes.home}>
      <div className={classes.info}>
        <Input
          icon={<SearchIcon />}
          type="text"
          onChange={(e) => searchOrder(e)}
          placeholder="Поиск по ID"
        />
        <div className={classes.flex}>
          <div className={classes.total}>
            <TotalIcon /> <p>Всего: {orders.length}</p>
          </div>
          <div className={classes.time}>
            <TimeIcon /> <p>45:08</p>
          </div>
        </div>
      </div>
      {newOrder.length == 0 ? (
        <div className={classes.boxs}>
          <Box
            background="#0E73F6"
            title="Новый"
            status="new"
            orders={orders}
            setOrders={setOrders}
          />
          <Box
            background="#F8C51B"
            title="Заготовка"
            status="blank"
            orders={orders}
            setOrders={setOrders}
          />
          <Box
            background="#22C348"
            title="Готовр"
            status="ready"
            orders={orders}
            setOrders={setOrders}
          />
          <Box
            background="#1AC19D"
            title="Курьер в пути"
            status="way"
            orders={orders}
          />
        </div>
      ) : (
        <div className={classes.boxs}>
          <Box
            background="#0E73F6"
            title="Новый"
            status="new"
            orders={newOrder}
            setOrders={setNewOrder}
          />
          <Box
            background="#F8C51B"
            title="Заготовка"
            status="blank"
            orders={newOrder}
            setOrders={setNewOrder}
          />
          <Box
            background="#22C348"
            title="Готовр"
            status="ready"
            orders={newOrder}
            setOrders={setNewOrder}
          />
          <Box
            background="#1AC19D"
            title="Курьер в пути"
            status="way"
            orders={newOrder}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
