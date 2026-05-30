
const success = "Succefully iniciated protocol";
const failure = "Failure to iniciate protocol";
const box = document.querySelector('.box');



function displayToast(msg){
    let toast = document.createElement('div');
    toast.innerHTML = msg;
    if(msg.includes('Succe')){
        toast.style.background = "lightgreen";
    }
    else if(msg.includes('Failure')){
        toast.style.background = "tomato";
    }

    toast.classList.add('toast');
    box.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}