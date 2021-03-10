// Set environment variables
require('dotenv').config();
PORT = process.env.PORT || 3000;
ZENDESK_TOKEN = process.env.ZENDESK_TOKEN;

const express = require('express');
const app = express();

const grok = require('grok-js').loadDefaultSync();
const fetch = require('node-fetch');

app.use(express.static('public'));
app.use(express.json());


// grok
app.post('/grok', (req, res) => {
  const { text, pattern } = req.body;
  const grokPattern = grok.createPattern(pattern);
  try {
    const obj = grokPattern.parseSync(text);
    res.json(obj);
  } catch (e) {
    res.status(500).send(e);
  }
});

// zendesk
app.post('/support', (req, res) => {
  const { samples, sawmill, requester } = req.body;
  const data = {
    ticket: {
      requester: {
        name: 'New Sawmill request',
        email: requester,
      },
      subject: 'A user has submitted a sawmill',
      tags: ['sawmill-request'],
      comment: {
        body: `${sawmill} \n ${samples}`,
      },
    },
  };
  fetch(`https://logzio.zendesk.com/api/v2/tickets.json`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Basic ${process.env.ZENDESK_TOKEN}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(res.status(201).send('Created'))
    .catch((err) => res.status(err.statusCode).send(err.message));
});

// get samples endpoint (depreciated)
app.post('/samples', async (req, res) => {
  const { type, token, region } = req.body;
  const query = {
    bool: { must: [{ match_phrase: { type: { query: `${type}` } } }] },
  };
  try {
    const samples = await fetch(
      `https://api.logz${region === 'us' ? '' : '-' + region}.io/v1/search`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-API-TOKEN': token,
        },
        body: JSON.stringify({ query, size: 5 }),
      }
    ).then((response) => response.json());
    res.json(samples);
  } catch (e) {
    res.status(500).send(e);
  }
});
//add ejs templates
// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
