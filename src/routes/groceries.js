const { Router } = require("express");
const router = Router();

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 1,
  },
  {
    item: "banana",
    quantity: 5,
  },
];

router.get("/", (req, res) => {
  res.send(groceryList);
});

router.get("/:item", (req, res) => {
  const { item } = req.params;
  const groceryItem = groceryList.find((g) => g.item === item);
  if (groceryItem) {
    res.send(groceryItem);
  } else {
    res.send({
      message: "item not found",
    });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
