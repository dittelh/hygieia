// Koden er taget fra https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// 26-05-2022

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let wasMailSent = params.success;

if(wasMailSent == "1"){
    alert('Din besked er nu afsendt. Du vil høre fra mig snarest.');

}else if(wasMailSent == "0"){
      alert('Der skete desværre en fejl... Prøv igen');
  }