// External
import axios from 'axios';

export default {
  getNextLaunch() {
    return this.apiCall(
      'https://api.spacexdata.com/v3/launches/next',
      'GET',
    );
  },
  getUpcomingLaunches() {
    return this.apiCall(
      'https://api.spacexdata.com/v3/launches/next',
      'GET',
    );
  },
  async apiCall(url, method) {
    let error = null;
    const RESPONSE = await axios({
      url,
      method,
    }).catch((e) => {
      error = e;
    });
    return RESPONSE || error.response;
  },
};
