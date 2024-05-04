import React from 'react';
import "./login.css";

function Login() {

  function handleSubmit(event) {
    event.preventDefault();
    let apto = true;
    const user = document.querySelector("#input-user").value;

    if (user === "") {
      apto = false;
    } else {
      for (let i = 0; i < user.length; i++) {
        if (user[i].toLowerCase() === "o") {
          apto = false;
          break;
        }
      }
    }

    console.log(user)

    if (!apto) {
      
      alert("Usuario inválido para registrarse");
    }else{
      alert("¡Usuario registrado correctamente!")
    }
  }

  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">Nicofy</div>
            <div id="welcome-line-2">Welcome Back, Nico</div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input id="input-user" placeholder="Username" type="text" onChange={(e) => {
                document.querySelector("#control-usuario").textContent = e.target.value;

                for (let i = 0; i < e.target.value.length; i++) {
                  if (e.target.value[i].toLowerCase() === "o") {
                    document.querySelector("#form").style.boxShadow = "0px 15px 60px #ff0000";
                    document.querySelector("#form").style.outline = "1px solid #ff0000";
                    document.querySelector("#input-user").style.color = "#ff0000";
                    document.querySelector("#control-usuario").style.color = "#ff0000";
                    document.querySelector("#welcome-line-1").style.color = "#ff0000";
                    document.querySelector("#welcome-line-1").textContent = ">:(";
                    alert("Por favor, ¡Nombres de usuario sin la letra o!");
                    break;
                  } else {
                    document.querySelector("#welcome-line-1").style.color = "#00FF7F";
                    document.querySelector("#welcome-line-1").textContent = "Nicofy";
                    document.querySelector("#input-user").style.color = "#00FF7F";
                    document.querySelector("#form").style.boxShadow = "0px 15px 60px #00FF7F";
                    document.querySelector("#form").style.outline = " 1px solid #2b9962";
                    document.querySelector("#control-usuario").style.color = "rgba(255, 255, 255)";
                  }
                }
              }} />
              <p id="control-usuario" style={{ textAlign: "center", margin: "0", marginRight: "20px" }}></p>
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
          <div id="forgot-pass">
            <a href="#">Forgot password?</a>
          </div>
          <div id="bar"></div>
        </div>
      </form>
    </div>
  );
}

export default Login;