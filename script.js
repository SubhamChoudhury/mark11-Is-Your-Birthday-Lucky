const birthDate = document.querySelector("#date");
const luckynumber = document.querySelector("#luckyNo");
const btnCheck = document.querySelector(".submit-btn");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dateString = date.value.split("-").join("");
  let sum = 0;
  for (eachString of dateString) {
    sum = sum + Number(eachString);

    const luckyNumberValue = Number(luckynumber.value);

    if (sum % luckyNumberValue === 0) {
      var lucky = "";
      lucky = `
                
                        <div class="you-lucky">
                            <h3>Wow! You are a lucky person with a lucky birth-date! 🤩</h3>
                            <img src="lucky.webp">
                        </div>
                `;
      document.querySelector(".output").innerHTML = lucky;
      console.log(lucky);
    } else {
      var unLucky = "";

      unLucky = `<div class="you-lucky">
                         <h3>Sorry! your birth-date isn't lucky 😔 but you are always a lucky person🙂 </h3>
                         <img src="unlucky.gif">
                      </div>
                     `;

      document.querySelector(".output").innerHTML = unLucky;
    }
  }
});
