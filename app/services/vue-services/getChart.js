import axiosInstance from './instance';

export function getChart(url) {
  return axiosInstance.get(url);
}
