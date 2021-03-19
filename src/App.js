import { useState, useEffect } from "react";
import "./styles.css";

const Food = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    console.log(data);
    let categories = data.categories;
    return (
      <>
        <div className="category-group-wrapper">
          {categories.map((category) => (
            <div className="category" key={category.idCategory}>
              <h3>{category.strCategory}</h3>
              <div className="category-details">
                <div className="category-description-image">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </div>
                <div className="category-description">
                  <p>{category.strCategoryDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return null;
};

export default function App() {
  return (
    <div className="App">
      <h1>Food Category Information</h1>
      <Food />
    </div>
  );
}
