const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer): string => {
  let binary = '';
  const bytes = [].slice.call(new Uint8Array(arrayBuffer));
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return window.btoa(binary);
};

export default arrayBufferToBase64;
