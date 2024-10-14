export type TPlanCard = {
  plan: {
    id: string;
    title: string;
    description: string;
    price: number;
  };
  isActive?: boolean | undefined;
  handleClick?: (id: string) => void;
};

export type TStepperState = 'plans' | 'information' | 'payment' | 'bank-portal';
