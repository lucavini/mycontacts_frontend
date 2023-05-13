export as namespace toast;

export interface ToastEvents {
  event: 'addtoast' | 'removetoast';
}

export interface ToastTypes {
  type: 'default' | 'danger' | 'success';
}

export interface ToastDetails {
  type: ToastTypes['type'];
  text: string;
  duration?: number;
}
