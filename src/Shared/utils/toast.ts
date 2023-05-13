import EventManager from 'Shared/lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({ text, type, duration }: toast.ToastDetails) {
  toastEventManager.emit('addtoast', { text, type, duration });
}
