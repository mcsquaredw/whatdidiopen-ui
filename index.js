import { h, app } from 'hyperapp'
import axios from 'axios'

const config = require('./config').getConfig();

const state = {
    items: getInitialState()
}

const actions = {

}

const view = () => {
  <div>
    hello hyperapp
  </div>
}

async function getInitialState() {
  try {
    const response = await axios.get('${config.API_URI}/items');
    return response.data;
  } catch (err) {
    console.log("An error occurred", err);
  }
}

app(state, actions, view, document.body)
