const button = document.querySelector('#calculate');
button.addEventListener('click',calculateTip);

function calculateTip(){
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    const service = document.querySelector('#service').value;

    if(amount === '' || service === 'Select'){
        alert("Enter valid values!");
        return;
    }
    //checking no of persons
    if(persons === '1' || persons === ''){
        document.querySelector('#each').style.display = 'none';
        let total = (amount * service);
        document.querySelector('.tip').style.display = 'block';
        document.querySelector('#total').innerHTML= total;
    }
    else{
        document.querySelector('#each').style.display = 'block';

        //calculate tip
        let total = (amount * service) / persons;
        total = total.toFixed(2);

        ///displaying value
        document.querySelector('.tip').style.display = 'block';
        document.querySelector('#total').innerHTML = total;
    }
}