// manzil
// catfact.ninja/fact
const factElement = document.getElementById("fact");

async function getFact(button){
    
    button.innerText = "Yuklanmoqda...";
    
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    
    factElement.innerText = data["fact"];
    
    button.innerText = "Yana yuklash";
}