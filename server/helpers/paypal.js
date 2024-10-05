const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: 'Af698ERkAYsJed2oQffLmYQg9gajfFnkgirHobNEzE5Z74m93T8qHq3StZacP4YOWzsg-UwQeI4eAyeu',
  client_secret: 'ECB4G6I7LrCpDZnVZezhPk_cqSXfdBwQsoWYegr2bgoB1Pcz5JqBa3pc0f26BLErsYVHs3tVATxkL4E6',
});

module.exports = paypal;