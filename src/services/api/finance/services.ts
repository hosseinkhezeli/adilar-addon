import { http } from '@/services/core/http';
import { routes } from './routes';
import { TSendToPaymentDto, TSendToPaymentRes } from './types';

// Payment
export const sendToPayment = (
  params: TSendToPaymentDto
): Promise<TSendToPaymentRes> => {
  return http.get(routes.sendToPayment, { params });
};
