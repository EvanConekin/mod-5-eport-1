//template_12p166r
//service_hd0xjxa
//-TMiitEfPolv-lqKI
function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
    'service_hd0xjxa',
'template_12p166r',
event.target,
'-TMiitEfPolv-lqKI'
    ).then(() =>{
console.log('this worked1')
    })
}