import { useEffect, useState } from "react";

export function List() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 3 },
    { title: "Apple", id: 5 },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  console.log(data);

  const item = data.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });
  return (
    <div>
      <p>List of Products</p>
      <ul>{item}</ul>
    </div>
  );
}
