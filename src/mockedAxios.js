import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({
  timeout: 1000,
});
const mock = new MockAdapter(instance);

mock.onPost('/recipes').reply(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([200, { message: 'Recipe has been created!' }]);
    }, 2000);
  });
});

export default instance;
