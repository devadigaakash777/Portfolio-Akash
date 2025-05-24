document.getElementById("recommendationForm").addEventListener("submit", function (e) {
  e.preventDefault();  

  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("message").value.trim();
  const popup=document.getElementById("popup");

  if (text) {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerHTML = `<p>"${text}"</p><h4>- ${name}</h4>`;

    document.getElementById("all_recommendations").appendChild(newRec);

    // Reset form
    document.getElementById("recommendationForm").reset();

    //pop up message
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    },5000);
    
    // Show confirmation
    alert("Thank you for your recommendation!");

  }
});
