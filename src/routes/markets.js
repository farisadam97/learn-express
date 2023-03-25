const { Router, response } = require("express");
const router = Router();

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else res.send(401);
});

const supermarkets = [
  {
    id: 1,
    store: "Whole food",
    miles: 0.6,
  },
  {
    id: 2,
    store: "Indomaret",
    miles: 1.2,
  },
  {
    id: 3,
    store: "Alfamart",
    miles: 2.3,
  },
  {
    id: 4,
    store: "Whole food",
    miles: 3.6,
  },
  {
    id: 5,
    store: "Indomaret",
    miles: 2.2,
  },
  {
    id: 6,
    store: "Alfamart",
    miles: 1,
  },
];

router.get("/", (req, res) => {
  const { miles } = req.query;
  const parsedMiles = parseInt(miles);
  if (!isNaN(parsedMiles)) {
    const filteredStore = supermarkets.filter((s) => s.miles <= miles);
    res.send(filteredStore);
  } else {
    res.send(supermarkets);
  }
});

module.exports = router;
