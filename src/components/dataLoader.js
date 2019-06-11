import axios from "axios";

const dataLoader = async () => {
  const { data } = await axios.get("https://swapi.co/api/people/", {
    headers: {
      accept: "application/json"
    }
  });
  const results = [...data.results];
  let next = data.next;
  while (next) {
    const { data: nextData } = await axios.get(next, {
      headers: {
        accept: "application/json"
      }
    });
    results.push(...nextData.results);
    next = nextData.next;
  }

  return results;
};
export { dataLoader };
