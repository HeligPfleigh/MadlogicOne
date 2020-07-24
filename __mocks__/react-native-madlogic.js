const setup = () => true;
const MADLOGIC_SDK_EVENTS = '';
const eventEmitter = {
  addListener: jest.fn(),
  removeListener: jest.fn(),
};

export {setup, MADLOGIC_SDK_EVENTS, eventEmitter};
