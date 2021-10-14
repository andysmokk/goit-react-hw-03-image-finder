function fetchImages(name, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=23025169-5a1370e5bf826cff1ac1e8732&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.json());
}

const api = {
  fetchImages,
};

export default api;
