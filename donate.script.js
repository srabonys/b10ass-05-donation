 // Noakhali donation section//-------
  
  document.getElementById("noakhali-btn").addEventListener("click", function () {
    let myAmount = idCallText("donate-amount");
  let noakhaliAmount = idCallText("noakhali-amount");
    let noakhaliInput = inputIdCall("noakhali-input");
  
    if (document.getElementById("noakhali-input").value === "") {
      alert("Empty Input filed");
      return;
    }
  
    let noakhaliAmountTotal = noakhaliAmount + noakhaliInput;
    let noakhaliNewAmount = document.getElementById("noakhali-amount");
    noakhaliNewAmount.innerText = noakhaliAmountTotal;
  
    let myAmountTotal = myAmount - noakhaliInput;
    let myNewAmount = document.getElementById("donate-amount");
    myNewAmount.innerText = myAmountTotal;
  
    let localtime = new Date();
    let div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "w-full",
      "p-4",
      "mb-3",
      "rounded-lg"
    );
    div.innerHTML = `
          <h2 class="font-bold text-primary text-xl mb-3">${noakhaliInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
          <p class="font-semibold text-base">Date : ${localtime}.</p>
    `;
    document.getElementById("history-sec").appendChild(div);
  
    document.getElementById("noakhali-input").value = "";
  
  });
  
  // feni donation section //---
  
  document.getElementById("feni-btn").addEventListener("click", function () {
    let myAmount = idCallText("donate-amount");
    let feniAmount = idCallText("feni-amount");
    let feniInput = inputIdCall("feni-input");
  
    if (document.getElementById("feni-input").value === "") {
      alert("Empty Input filed");
      return;
    }
  
    let feniAmountTotal = feniAmount + feniInput;
    let feniNewAmount = document.getElementById("feni-amount");
    feniNewAmount.innerText = feniAmountTotal;
  
    let myAmountTotal = myAmount - feniInput;
    let myNewAmount = document.getElementById("donate-amount");
    myNewAmount.innerText = myAmountTotal;
    
    let localtime = new Date();
    let div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "w-full",
      "p-4",
      "mb-3",
      "rounded-lg"
    );
    div.innerHTML = `
          <h2 class="font-bold text-primary text-xl mb-3">${feniInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
          <p class="font-semibold text-base">Date : ${localtime}.</p>
    `;
    document.getElementById("history-sec").appendChild(div);
  
    document.getElementById("feni-input").value = "";
  });
  
  // Quta donation section //-----
  
  document.getElementById("donate-qouta-box").addEventListener("click", function () {
    let myAmount = idCallText("donate-amount");
    let qoutaAmount = idCallText("donate-qouta-amount");
    let qoutaInput = inputIdCall("donate-qouta-card");
  
    if (document.getElementById("qouta-input").value === "") {
      alert("Empty Input filed");
      return;
    }
  
    let qoutaAmountTotal = qoutaAmount + qoutaInput;
    let qoutaNewAmount = document.getElementById("donate-qouta-amount");
    qoutaNewAmount.innerText = qoutaAmountTotal;
  
    let myAmountTotal = myAmount - qoutaInput;
    let myNewAmount = document.getElementById("donate-amount");
    myNewAmount.innerText = myAmountTotal;
  
    let localtime = new Date();
    let div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "w-full",
      "p-4",
      "mb-3",
      "rounded-lg"
    );
    div.innerHTML = `
          <h2 class="font-bold text-primary text-xl mb-3">${qoutaInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
          <p class="font-semibold text-base">Date : ${localtime}.</p>
    `;
    document.getElementById("history-sec").appendChild(div);

    document.getElementById("qouta-input").value = "";
  });

   // button change-section-js//-----
  
   document.getElementById("history-btn-color").addEventListener("click", function () {
    document
      .getElementById("donation-btn-color")
      .classList.remove("hover:bg-btnColor", "bg-btnColor");
    document
      .getElementById("history-btn-color")
      .classList.remove("border-gray-600", "hover:bg-white", "bg-white");
    document
      .getElementById("history-btn-color")
      .classList.add("hover:bg-btnColor", "bg-btnColor");
  
    document.getElementById("history-sec").classList.remove("hidden");
    document.getElementById("donation-name").classList.add("hidden");
  });
  
  document.getElementById("donation-btn-color").addEventListener("click", function () {
    document
      .getElementById("donation-btn-color")
      .classList.add("hover:bg-btnColor", "bg-btnColor");
    document
      .getElementById("history-btn-color")
      .classList.add("border-gray-600", "hover:bg-white", "bg-white");
    document
      .getElementById("history-btn-color")
      .classList.remove("hover:bg-btnColor", "bg-btnColor");
  
    document.getElementById("donation-name").classList.remove("hidden");
    document.getElementById("history-sec").classList.add("hidden");
  });
  document.getElementById("noakhali-input")
    .addEventListener("keyup", function () {
      let noakhaliInput = inputIdCall("noakhali-input");
      let noakhaliInputValue = document.getElementById("noakhali-input").value;
  
      if (noakhaliInput <= 0) {
        alert("Wrong Input! Please Enter Valid Number.");
        document.getElementById("noakhali-input").value = "";
        return;
      }
    });

    
  
  