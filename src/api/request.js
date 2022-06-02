export const request = (url) => {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("ERROR");
    });
  };
  