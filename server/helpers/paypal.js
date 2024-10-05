const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: 'ASPmTRRdEXqBxnn_i3FaYYnRKrpMZzXJ_Vb-tal8mleLGyRnuBT3vJCrTQmYyPLimCFuD6ey0A1_aK2f',
  client_secret: 'EFBR-E2K2r8q9BlqGeSKk5iNiYwBE9Cp4LbYIVmWy3g0fhLwYLcPM631guO6otm6Xs-tbWjCuTGrBkAG',
});

module.exports = paypal;