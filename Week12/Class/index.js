/*

(C)REATE - POST
(R)EAD - GET
(U)PDATE - PUT
(D)ELETE - DELETE

*/

let entity = 'slugs';

let data = {
    name: 'phil',
    type: 'slimy',
    birthday: 'January 1st'
}


$.ajax({
    type: 'POST',
    url: `https://crudcrud.com/api/04429cdb49c44e63bd05cb760c66cc3d/${entity}`,
    data: data,
    dataType: 'json',
    success: success
});

function success(data) {
    console.log(data);
}