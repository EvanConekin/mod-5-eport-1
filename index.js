//template_12p166r
//service_hd0xjxa
//-TMiitEfPolv-lqKI
function contact(event) {
    event.preventDefault();
   // emailjs
  //  .sendForm(
    //'service_hd0xjxa',
//'template_12p166r',
//event.target,
//'-TMiitEfPolv-lqKI'
  //  ).then(() =>{
//console.log('this worked1')
//    })
//}
const loading = document.querySelector('modal__overlay--loading')
const success = document.querySelector('modal__overlay--success')
loading.classList += " modal__overlay--visible"

setTimeout(() => {
   // loading.classList.remove("modal__overlay--visible");
   // success.classList += " modal__overlay--visible";
    console.log('it worked 2')
}, 1000);
}