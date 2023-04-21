export default function toast(details: toast.ToastDetails) {
  const event = new CustomEvent('addtoast', {
    detail: {
      ...details,
    },
  });

  document.dispatchEvent(event);
}
