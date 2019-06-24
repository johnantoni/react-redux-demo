import { ROTATE } from './types';

const rotateAction = (payload) => {
  return {
    type: ROTATE,
    payload
  }
}
export default rotateAction;