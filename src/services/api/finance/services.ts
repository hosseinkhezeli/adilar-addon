import { http } from '@/services/core/http';
import { routes } from './routes';
import { TSendToPaymentDto } from './types';

// Payment
export const sendToPayment = (params: TSendToPaymentDto): Promise<unknown> => {
  return http.get(routes.sendToPayment, { params });
};
