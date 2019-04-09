export interface Option {
  content: string;
  duration?: number;
  onClose?: () => void;
}

export enum Type {
  Info = 'info',
  Success = 'success',
  Error = 'error',
  Loading = 'loading'
}