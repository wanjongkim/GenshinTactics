import "./styles.css";
import { useRef, useState } from "react";

function Home() {
  const [numCharsChosen, setNumCharsChosen] = useState(0);
  const M = window.M;

  function search() {
    if (numCharsChosen < 4) {
      M.toast({
        html: "You must pick at least 4 characters!",
        classes: "errorMessage",
        displayLength: 3000
      });
    } else {
    }
  }

  function selectChar(e) {
    let el = e.target;
    if (el.classList.contains("brighten")) {
      el.classList.remove("brighten");
      setNumCharsChosen(numCharsChosen - 1);
    } else {
      el.classList.add("brighten");
      setNumCharsChosen(numCharsChosen + 1);
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#1a1a1d",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "50px",
        borderRadius: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: "50px",
          justifyContent: "center",
          paddingBottom: "50px"
        }}
      >
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />

        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          style={{}}
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          style={{}}
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          style={{}}
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
        <img
          className="circle"
          src="https://www.genshin-impact.fr/wp-content/uploads/2020/07/MC-anemo.png"
          alt="character"
          onClick={(e) => selectChar(e)}
        />
      </div>
      <button
        style={{
          position: "relative",
          bottom: "25px",
          width: "100px",
          height: "45px",
          borderRadius: "5px"
        }}
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}

export default Home;
