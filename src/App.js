import { useState } from "react";
import "./App.css";
import Cellule from "./components/Cellule.js";
function App() {
  const [prev, setPrev] = useState(-1);
  const [images, setImages] = useState(
    [
      { id: 1, img: "/Images/nodejs.png", stat: "" },
      { id: 1, img: "/Images/nodejs.png", stat: "" },
      { id: 2, img: "/Images/reactjs.png", stat: "" },
      { id: 2, img: "/Images/reactjs.png", stat: "" },
      { id: 3, img: "/Images/html5.png", stat: "" },
      { id: 3, img: "/Images/html5.png", stat: "" },
      { id: 4, img: "/Images/css3.png", stat: "" },
      { id: 4, img: "/Images/css3.png", stat: "" },
      { id: 5, img: "/Images/redux.png", stat: "" },
      { id: 5, img: "/Images/redux.png", stat: "" },
      { id: 6, img: "/Images/postman.png", stat: "" },
      { id: 6, img: "/Images/postman.png", stat: "" },
      { id: 7, img: "/Images/mongo.png", stat: "" },
      { id: 7, img: "/Images/mongo.png", stat: "" },
      { id: 8, img: "/Images/java.png", stat: "" },
      { id: 8, img: "/Images/java.png", stat: "" },
      { id: 9, img: "/Images/vscode.png", stat: "" },
      { id: 9, img: "/Images/vscode.png", stat: "" },
      { id: 10, img: "/Images/angularjs.png", stat: "" },
      { id: 10, img: "/Images/angularjs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const HandelChange = (id) => {
    if (prev === -1) {
      images[id].stat = "active";
      setImages([...images]);
      setPrev(id);
    } else check(id);
  };
  const check = (ident) => {
    if (images[ident].id === images[prev].id) {
      images[ident].stat = "correct";
      images[prev].stat = "correct";
      setImages([...images]);
      setPrev(-1);
    } else {
      images[ident].stat = "wrong";
      images[prev].stat = "wrong";
      setImages([...images]);
      setTimeout(() => {
        images[ident].stat = "";
        images[prev].stat = "";
        setImages([...images]);
        setPrev(-1);
      }, 1000);
    }
  };

  return (
    <>
      <h1 className="text">Memory Game - React js</h1>
      <div className="container">
        {images.map((item, index) => (
          <Cellule
            key={index}
            url={item.img}
            id={index}
            HandelChange={HandelChange}
            item={item}
          />
        ))}
      </div>
    </>
  );
}

export default App;
