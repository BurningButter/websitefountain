const json = Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS5iZwKtAoTtOLa-arMPvBVQAVP0tpraL2PTZr2eopwHfsHhZ_9_7XqlbAmwDVvJqnA-TZbfX_PvQRd/pub?output=csv", {
  download: true,
  delimiter: ",",
  header: true,
  complete: function (results) {
    console.log(results);
  }
});