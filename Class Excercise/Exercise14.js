document.querySelector('#hide').addEventListener('checked', function(){
    if(document.querySelector('#hide').cheched){
        document.querySelector('#soup').style.display = 'none';
    } else {
        document.querySelector('#soup').style.display = 'block';
    }
});
