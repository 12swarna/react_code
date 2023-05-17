import './Aboutus.css';

const Aboutpage = () => {
  return (
    <div>
      <header>
        <img
          src="https://t3.ftcdn.net/jpg/04/08/99/00/360_F_408990068_A8QzYIfgChv66j71u5eavcIKA6NC2ML3.jpg"
          alt="noimage"
          className="image"
        />

        <p style={{fontSize:"20px",fontFamily:"cursive",fontWeight:"bolder"}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, beatae id soluta ullam eaque illo reiciendis
          eos provident recusandae, perspiciatis, necessitatibus eligendi repudiandae consequatur modi debitis minima
          iste! Voluptates quisquam asperiores, vitae soluta necessitatibus tempore non ex ipsa blanditiis voluptatum,
          aspernatur quis cumque. Cumque dolore deleniti magnam, eveniet quibusdam minus ullam molestiae dolorum inventore
          architecto aspernatur labore sequi facere autem dicta harum expedita praesentium? Placeat tempore, eum ad
          doloribus quod consequuntur a quibusdam exercitationem officia dolorum neque, tenetur porro deleniti. Vel
          expedita velit voluptas dolores eum harum nobis laboriosam ipsam deleniti iste consectetur voluptatum, fuga odio
          qui vero animi molestias?
        </p>
      </header>
      <footer
        style={{
          backgroundColor: "skyblue",
          marginTop: "150px",
          height: "200px",
          textAlign: "center",
          color: "white",
          
          
          
        }}
      >
        <h1 style={{ fontSize: "100px" }}>
          The Generics <i style={{ backgroundColor: "white", color: "red", fontWeight: "larger", marginLeft: "50px" }} className="fa-brands fa-youtube"></i>{" "}
          <i className="fa-brands fa-facebook"></i>
        </h1>
      </footer>
    </div>
  );
};

export default Aboutpage;
