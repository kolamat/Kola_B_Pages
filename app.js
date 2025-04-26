const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// With Toggle we can add and remove class automatically when clicked next
const tForToggle = () => {
  body.classList.toggle("active");
  h1.classList.toggle("bold");
  button.classList.toggle("btn");
};

// with add we can only add a class and not remove on next click or action
const aForAdd = () => {
  body.classList.add("active");
};

// with add we can only add a class and not remove on next click or action
const rForRemove = () => {
  body.classList.remove("active");
};

// ADDING A CLASS
// 1. Get the element you want to add a class to
// 2. use the classlist property to access the elements classes
// 3. use the add method to add a class to the elements classes
// 4. pass the name of the class you want to add as an argument to the add method
// 5. save your changes by updating the elemnts classlist properpty

// REMOVING A CLASS
// 1. Get the element you want to remove a class from
// 2. use the classlist property to access the elements classes
// 3. use the remove method to remove a class from the elements classes
// 4. pass the name of the class you want to remove as an argument to the remove method
// 5. save your changes by updating the elemnts classlist properpty
