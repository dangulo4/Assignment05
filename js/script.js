// GLOBAL VARIABLES
let id;
let name;
let ext;
let email;
let department;
let submit;

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id);

// GET DOM ELEMENTS
strId = $('id');
strName = $('name');
strExt = $('ext');
strEmail = $('email');
strDept = $('department');
strSubmit = $('submit');

strSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`ID: ${strId.value}`);
  console.log(`Name: ${strName.value}`);
  console.log(`Extenstion: ${strExt.value}`);
  console.log(`Email: ${strEmail.value}`);
  console.log(`Department: ${strDept.value}`);
});
