import login from 'src/store/reducers/auth';
import history from 'src/store/reducers/history';
import data from 'src/store/reducers/data';

export default {
  ...login,
  ...history,
  ...data
};
