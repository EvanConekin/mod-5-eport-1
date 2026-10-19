function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_hd0xjxa",
      "template_12p166r",
      event.target,
      "-TMiitEfPolv-lqKI",
    )
    .then(() => {
      console.log("this worked1");
    });
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");

  setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible");
    console.log("it worked 2");
  }, 1000);
}

let isModalOpen = false;
function toggleModal() {
//console.log( 'toggleModal()')
if (isModalOpen) {
  isModalOpen = false;
  return document.body.classList.remove("modal--open");
}
isModalOpen = true;
document.body.classList += " modal--open"
}

//template_12p166r
//service_hd0xjxa
//-TMiitEfPolv-lqKI
//function contact(event) {
   // event.preventDefault();
//const loading = document.querySelector(' .modal__overlay--loading')
//const success = document.querySelector(' .modal__overlay--success')
//loading.classList += " modal__overlay--visible";
   //emailjs
   //.sendForm(
   // 'service_hd0xjxa',
//'template_12p166r',
//event.target,
//'-TMiitEfPolv-lqKI'
 //  ).then(() => {
  //loading.classList.remove(" modal__overlay--visible");
  //success.classList += " modal__overlay--visible";
  // }).catch(() => {
  //  loading.classList.remove(" modal__overlay--visible");
   // alert(
   //   "The email service is temporarily unavailable. Please contact me directly at econekin@gmail.com."
   // );
   //})


//console.log('this worked1')
//    })
//}
//const loading = document.querySelector('modal__overlay--loading')
//const success = document.querySelector('modal__overlay--success')
//loading.classList += " modal__overlay--visible";

//setTimeout(() => {
   // loading.classList.remove("modal__overlay--visible");
   // success.classList += " modal__overlay--visible";
   // console.log('it worked 2')
//}, 1000);
//}
