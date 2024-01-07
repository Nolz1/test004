
document.querySelector("#Light-btn1").addEventListener("click", () => {
    setCookie("L2", true, 30);
    location.reload();
})
document.querySelector("#Light-btn2").addEventListener("click", () => {
    setCookie("L2", false, 30);
    location.reload();
})

setCookie = (cName, cValue, exDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/, path=/work, path=/contact";
}
/*  if the webside has multiple sides than add more paths to the end: 
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/, path=/about, path=/projects"; */

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length); 
    })

    return value;
}


function getCookieValue(cName){
    const name = cName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split("; ");
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
}
let cookieValue = getCookieValue("L2");


const root = document.documentElement;

window.addEventListener('load', () => {

    if(cookieValue === "true"){
        root.style.setProperty("--col-1-", "red");
    }
    else{
        root.style.setProperty("--col-1-", "blue");
    }
})



