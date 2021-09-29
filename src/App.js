import "./styles.css";

function Home() {
  function search() {}
  function selectChar(e) {
    let el = e.target;
    if (el.classList.contains("brighten")) {
      el.classList.remove("brighten");
    } else {
      el.classList.add("brighten");
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
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
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
