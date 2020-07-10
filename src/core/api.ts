import axios from 'axios';

import {TernantSetting} from './const';
import mockTernant from '../configs/mockTernant.json';

const API_SERVER = 'https://API_SERVER';

const instance = axios.create({
  baseURL: API_SERVER,
  timeout: 10000,
});

export const getTernantSetting = (
  _clientCode: string,
): Promise<TernantSetting> => Promise.resolve(mockTernant as any);

export default instance;
