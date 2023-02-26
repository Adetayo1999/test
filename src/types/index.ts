export interface GenerateRoute {
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
  path: string;
}

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  toggleOpen(): void;
}
