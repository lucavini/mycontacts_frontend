export default function onlyDigits(number: string) {
  return number.replace(/\D/g, '');
}
