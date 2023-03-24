const { Router, response } = require("express");
const router = Router();

const supermarkets = [
  {
    store: "Whole food",
  },
  {
    store: "Indomaret",
  },
  {
    store: "Alfamart",
  },
];

router.get("/", (req, res) => {
  res.send(supermarkets);
});

module.exports = router;
