import axios from 'axios';

async function makeRequest() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
}

makeRequest();
