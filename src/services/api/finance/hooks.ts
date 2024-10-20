import { useMutation } from '@tanstack/react-query';
import { TSendToPaymentDto } from './types';
import { sendToPayment } from './services';

//Payment
export const useSendToPayment = () =>
  useMutation({
    mutationKey: ['send-to-payment'],
    mutationFn: (params: TSendToPaymentDto) => sendToPayment(params),
  });
//______________________________________________________________
