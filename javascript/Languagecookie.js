
document.querySelector("#cookie-btn1").addEventListener("click", () => {
    document.querySelector("#cookieBanner").style.display = "none";
    setCookie("cookie", true, 30);
    location.reload();
})
document.querySelector("#cookie-btn2").addEventListener("click", () => {
    document.querySelector("#cookieBanner").style.display = "none";
    setCookie("cookie", false, 30);
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

cookieMessage = () => {
    if(!getCookie("cookie"))
    document.querySelector("#cookieBanner").style.display = "flex";
}

window.addEventListener("load", cookieMessage);



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
let cookieValue = getCookieValue("cookie");


const head = document.head

window.addEventListener('load', () => {

    if(cookieValue === "true"){
        const gAnalytics = document.createElement("script");
        gAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-ZY0RP5LKFZ";
        head.append(gAnalytics);

        const Analytics = document.createElement("script");
        Analytics.src = "googleAnalytics.js";
        head.append(Analytics); 
    }
    else{}
})



