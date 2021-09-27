// BLOG read more
function loadInfo1(){
  $('#info1').load('info.html #info_1');
}
function loadInfo2(){
  $('#info2').load('info.html #info_2');
}
function loadInfo3(){
  $('#info3').load('info.html #info_3');
}
function loadInfo4(){
  $('#info4').load('info.html #info_4');
}


// CONTACT form
var form=document.getElementById('formInfo');
      form.onsubmit=validateInfoForm;

      function validateInfoForm(){
        var name=form.elements.name;
        var email=form.elements.email;
        var subject=form.elements.subject;
        var message=form.elements.message;

        var nameValue=name.value;
        var emailValue=email.value;
        var subjectValue=subject.value;
        var messageValue=message.value;

        if (nameValue.length>30){
          alert('Enter name no longer than 30 characters!');
          name.focus();
          return false;
        }

        if (/[^\u0020\u0041-\u005A\u0061-\u007A]/.test(nameValue)) {
          alert('Enter your name only in English!');
          name.focus();
          return false;
        }

        if (Number(nameValue==0)){
          alert('Required input field!');
          name.focus();
          return false;
        }

        if (/[^\u0041-\u005A\u0061-\u007A\u0030-\u0039\u002D-u002F\u005F\u0040]/.test(emailValue)) {
          alert('Enter correct email!');
          email.focus();
          return false;
        }

        if(emailValue.indexOf('@')==-1){
          alert('Enter correct email! It must have @');
          email.focus();
          return false;
        }

        if (Number(emailValue==0)){
          alert('Required input field!');
          email.focus();
          return false;
        }

        if (subjectValue.length>40) {
          alert('Subject should not exceed 40 characters!');
          subject.focus();
          return false;
        }

        if (messageValue.length<50) {
          alert('Enter a message at least 50 characters!');
          message.focus();
          return false;
        }

        return true;
      }

