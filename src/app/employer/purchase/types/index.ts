export type TPlanCard = {
  plan: {
    id: string;
    title: string;
    description: string;
    price: number;
    status: 'active' | 'inactive';
  };
  isActive?: boolean | undefined;
  handleClick?: (id: string) => void;
};

export type TStepperState =
  | 'plans'
  | 'information'
  | 'pre_invoice'
  | 'bank-portal'
  | 'completed';
