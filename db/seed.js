const db  = require('./index.js');
const Student = require('./Student.js');
const mongoose = require('mongoose');
db;

const sampleData = [
  {
    name: "Andy",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024M4EPXC4-0a4b78152126-512"
  },
  {
    name: "Ben",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U0254P5HBLY-b01374551470-512"
  },
  {
    name: "Borg",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024F5V380K-f1aa8fb12a9c-512"
  },
  {
    name: "Cassandra",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02406C06JK-4c4073e919a8-512"
  },
  {
    name: "Christian",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024864BZN2-80fd53192147-512"
  },
  {
    name: "Chris",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U0254P99ETA-b8ea584355b4-512"
  },
  {
    name: "Gulina",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024THW39BK-841fc1b6b6d2-512"
  },
  {
    name:"Jean-Luc",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U020GDAKUBA-25b48ab37ad4-512"
  },
  {
    name: "Jooyoung",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024F5YNXUK-c064648040a4-512"
  },
  {
    name: "Kenneth",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024BSVB90D-8ca0b5275ab2-512"
  },
  {
    name: "Louis",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024EV4J726-7ab0a070a440-512"
  },
  {
    name: "Matthew",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024BSWR9GV-71dbbb26aa35-512"
  },
  {
    name: "Nicholas",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024M4KV5SQ-8e96aeaa142b-512"
  },
  {
    name: "Ryan",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U02406H5DU7-21828a168853-512"
  },
  {
    name: "Sean",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024THXMRSM-6a916a4f42b5-512"
  },
  {
    name: "Anna",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U0254PB1TGQ-0442c59eb3cd-512"
  },
  {
    name: "Tyler",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024F609D35-147623ff5d4d-512"
  },
  {
    name: "Michelle",
    imageUrl: "https://ca.slack-edge.com/T2SV1LBC6-U024869FHC6-6016efa4bd4e-512"
  },
];

const insertSampleData = function() {
  Student.create(sampleData)
    .then(() => mongoose.connection.close());
};
let database = mongoose.connection;
database.once('open', () => {
  console.log('connected')
  insertSampleData();
});