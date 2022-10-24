// Function constructor
function Character(name, strength, health) {
  // Properties
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.elements = new UIElements(this.name)
}

// DOM

function UIElements(name) {

  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.progress = document.querySelector(`.${name}-health span`);
  this.alive = document.querySelector(`#${name}-alive`);

}

// Methods into prototype of Character

// Attack Method
Character.prototype.attack = function (opponent) {
  if(opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.elements.progress.style.width = `${opponent.health}%`;

  } if(opponent.health == 0) {
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.alive.innerText = `${opponent.name} died`;
  }
};

/*
// Show Status 
Character.prototype.status = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Strength: ${this.strength}`);
  console.log(`Health: ${this.health}`);
};
*/
// Make Health 

Character.prototype.makeHealth = function () {
  if (this.health < 100){
    this.health += 10;
    this.elements.progress.style.width = `${this.health}%`;
  } 
  if(this.health > 100) this.health = 100;
};

// create object
let naruto = new Character("naruto", 10, 100);
let sassaki = new Character("sassaki", 5, 100);

naruto.elements.attackBtn.addEventListener("click" , () => {
    naruto.attack(sassaki);
   // sassaki.status();
});

sassaki.elements.attackBtn.addEventListener("click" , () => {
    sassaki.attack(naruto);
  //  naruto.status();
});

naruto.elements.healthBtn.addEventListener("click" , () => {
    naruto.makeHealth();
});

sassaki.elements.healthBtn.addEventListener("click" , () => {
    sassaki.makeHealth();
});