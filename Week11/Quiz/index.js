/* Assume that you have an array of customer objects like this:

[

  {

    firstName: "Sam",

    lastName: "Smith",

    email: "sam.smith@gmail.com"

  },

  {

    firstName: "Tom",

    lastName: "Jones",

    email: "tom.jones@gmail.com"

  },

......

]



Also, assume your HTML contains a table with an id of "customer-table" and columns First Name, Last Name, and Email Address. Using JQuery, write the code needed to add a new row to the table for each customer in the returned array.
*/

let myArray =

[

    {
  
      firstName: "Sam",
  
      lastName: "Smith",
  
      email: "sam.smith@gmail.com"
  
    },
  
    {
  
      firstName: "Tom",
  
      lastName: "Jones",
  
      email: "tom.jones@gmail.com"
  
    },
  
  ];

  $('#customer-table').append('<tr><td> Sam </td>' + '<td> Smith </td>' + '<td>sam.smith@gmail.com</td></tr>');
  $('#customer-table').append('<tr><td> Tom </td>' + '<td> Jones </td>' + '<td>tom.jones@gmail.com</td></tr>');