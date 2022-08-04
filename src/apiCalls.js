export const getTopStories = (type) =>
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=I8mb5fAvjxFTdnhIuVO54H9H3OHo0qvk`
  )
    .then((res) => res.json())
    .catch((err) => alert(err));
