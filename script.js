const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// const handleClick = async () => {
//   const response = await fetch()
// }

// const getData = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/client");
//     if (!response.ok) {
//       throw new Error("Error" + response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error("error", err);
//   }
// };

const postData = async () => {
  const dataForm = {
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    pesan: document.getElementById('pesan').value
  };


  try {
    const response = await fetch("https://api-service-dita.vercel.app/client", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    if (!response.ok) {
      throw new Error("Error " + response.statusText);
    }
    const data = await response.json();
    alert("Message "+data[0]?.message);
  } catch (err) {
    console.error('Error'+err);
  }
};
