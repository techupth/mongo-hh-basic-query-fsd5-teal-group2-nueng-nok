//ใช้ findOne ในการหาข้อมูล Document ของลูกค้าชื่อ Zoe จากนั้นให้ทำการ Transform ข้อมูลให้เหลือแค่ Property total_price และ customer_name

db.pizzaOrders.findOne(
  { customer_name: "Zoe" },
  { customer_name: 1, total_price: 1 }
);
