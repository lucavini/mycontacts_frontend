interface Payload {
  listener: (payload: toast.ToastDetails) => void;
}

export default class EventManager {
  listeners: {
    addtoast?: Payload['listener'][];
    removetoast?: Payload['listener'][];
  };

  constructor() {
    this.listeners = {};
  }

  on(eventName: toast.ToastEvents['event'], listener: Payload['listener']) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName]?.push(listener);
  }

  removeListener(eventName: toast.ToastEvents['event'], listenerToRemove: Payload['listener']) {
    const listeners = this.listeners[eventName];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);
    this.listeners[eventName] = filteredListeners;
  }

  emit(eventName: toast.ToastEvents['event'], payload: toast.ToastDetails) {
    if (!this.listeners[eventName]) {
      return;
    }

    this.listeners[eventName]?.forEach((listener) => {
      listener(payload);
    });
  }
}
