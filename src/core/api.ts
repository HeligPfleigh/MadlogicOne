import axios from 'axios';

import {TernantSetting} from './const';
import mockTernant from '../mocks/mockTernant.json';
import mockTernantAccount from '../mocks/mockTernant2.json';
import mockTernantADFS from '../mocks/mockTernant3.json';

const API_SERVER = 'https://API_SERVER';

const instance = axios.create({
  baseURL: API_SERVER,
  timeout: 10000,
});

export const getTernantSetting = (
  clientCode: string,
): Promise<TernantSetting> => {
  switch (clientCode) {
    case '0':
      return Promise.resolve(mockTernantADFS as any);
    case '1':
      return Promise.resolve(mockTernantAccount as any);
    default:
      return Promise.resolve(mockTernant as any);
  }
};

export default instance;
