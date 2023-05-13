import EventManager from 'Shared/lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ text, type }: toast.ToastDetails) {
  toastEventManager.emit('addtoast', { text, type });
}
