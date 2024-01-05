export default async function loadBalancer(chinaDownload, USDownload) {
  const result = Promise.race([chinaDownload, USDownload]).then(
    (result1) => result1,
  );
  return result;
}
