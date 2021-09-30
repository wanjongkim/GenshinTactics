function Characters() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#1a1a1d",
        margin: "0 auto",
        marginTop: "50px",
        height: "170px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 50px",
        flexWrap: "nowrap"
      }}
    >
      <img
        src="https://rerollcdn.com/GENSHIN/Characters/Albedo.png"
        href="Character image"
      />
      <div
        style={{
          flexBasis: "100%",
          paddingTop: "50px",
          alignSelf: "start",
          paddingLeft: "25px"
        }}
      >
        <b style={{ color: "white", fontSize: "24px" }}>Albedo</b>
        <br />
        <span style={{ color: "white", fontSize: "16px" }}>
          <span style={{ color: "yellow" }}>Geo</span> * Sword
        </span>
      </div>
      <img
        src="https://www.genshinlab.com/wp-content/uploads/2021/06/Element_Cryo.png"
        href="Element"
      />
    </div>
  );
}

export default Characters;
