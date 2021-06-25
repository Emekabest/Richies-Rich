export const parseRequest_url = () => {
  const url = document.location.hash;
  const request = url.split("/");

  const splittedUrl = {
    resource: request[1],
    slug: request[2],
    action: request[3],
  };

  return splittedUrl;
};
