var names = ['Harri', 'Sakari', 'Karoliina', 'Reetta'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
 console.log('arrowFunc', name); 
});

names.forEach((name) => console.log(name));
  
var returnMe = (name) => name + '!!';
console.log(returnMe('Minna'));
  
var person = {
  name: 'Harri',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name +  ' says hi to ' + name);
    });
  }
};
              
person.greet();    

function add (a, b) {
  return a + b;      
}
      
console.log(add(1, 3));
      
var addThese = (a, b) => (a + b);
      
console.log(addThese(1, 3));
      
var addTheseAsWell = (a, b) => {
  return (a + b);
};
console.log(addTheseAsWell(1, 3));