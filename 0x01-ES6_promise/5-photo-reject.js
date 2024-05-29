export default function uploadPhoto(filename) {
  const rejected = Promise.reject(new Error(`${filename} cannot be processed`));
  rejected.catch((error) => error);
  return rejected;
}
