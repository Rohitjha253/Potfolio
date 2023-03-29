const myForm=document.getElementById('my-form');
const namein=document.getElementById('uname');
const email=document.getElementById('uemail');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(namein.value=== '' || email.value==='')
    {
        alert("Enter required feilds");
    }

}
