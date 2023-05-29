import { axiosClient } from './axiosClient';

const Api = {
  getFileUpload(): Promise<any> {
    return axiosClient.get('files?user=userId1');
  },
};

export default Api;
