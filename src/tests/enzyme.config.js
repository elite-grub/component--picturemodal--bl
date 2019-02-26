import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

module.exports = {
  config: configure({ adapter: new Adapter() }),
};
