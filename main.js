const btn = document.querySelector(".open-calc");
const popup = document.querySelector(".modal-overlay");

class Calculator {
  constructor (){
    this.members = 1;
    this.days = 1;
    this.salary = 1;
    this.inputs = document.querySelectorAll('input');
    this.membersInput =  document.querySelector("#members-input");
    this.membersRange =  document.querySelector("#members-range");
    this.daysInput =  document.querySelector("#days-input");
    this.daysRange =  document.querySelector("#days-range");
    this.salaryInput =  document.querySelector("#salary-input");
    this.salaryRange =  document.querySelector("#salary-range");
    this.totalPrice = document.querySelector("#total-price");
    this.totalPrice = document.querySelector("#total-price");
    this.event();
  }

event() {

  this.inputs.forEach(el => {
  el.addEventListener('change', e => {

  if(e.target.id == 'days-input' || e.target.id == 'days-range'){
    this.days = e.target.value;
    this.daysInput.value = this.days;
    this.daysRange.value = this.days;

  }

 
  if(e.target.id == 'members-input' || e.target.id == 'members-range'){
    this.members = e.target.value;
    this.membersInput.value = this.members;
    this.membersRange.value = this.members;
 
  }


  if(e.target.id == 'salary-input' || e.target.id == 'salary-range'){
    this.salary = e.target.value;
    this.salaryInput.value = this.salary;
    this.salaryRange.value =  this.salary;

  }

  this.totalPrice.innerText = this.countPrice()
   
  });

  
  });

}

countPrice(){
  return parseInt(this.members)*parseInt(this.days)*parseInt(this.salary)
}


}

let calc = new Calculator;



btn.addEventListener('click', (e) => {
popup.classList.add('modal-overlay--visible');
});

popup.addEventListener('click', (e) => {
	if (e.target == popup) {
		popup.classList.remove('modal-overlay--visible');
		popup.classList.remove('modal--visible');
		};
	
});