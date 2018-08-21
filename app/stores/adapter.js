import axios from 'axios';
import configs from '../../configs/env.json';

const AXIOS_TIMEOUT = 1e4; // wait 1 second

export default axios.create({
  baseURL: configs.server.host.fullURL,
  timeout: AXIOS_TIMEOUT,
});
