/*

1) Start buy making a site about something that interests you
2) Come up with a class to contain all of the objects in your class
3) Within class, create methods to update class elements

*/

// class Cars {
//     make
//     model
//     color
//     year
//     bodyType

//     constructor(make, model, color, year, bodyType, mileage) {
//         this.make = make;
//         this.model = model;
//         this.color = color;
//         this.year = year;
//         this.bodyType = bodyType
//     }
// }

var app = new function() {
    this.el= document.getElementById('tasks');
    this.tasks=[]

    // CREATE \\
    this.Add = function() {
        el = document.getElementById('add-to-do');
        var tasks = el.value;
        if(tasks) {
            this.tasks.push(tasks.trim());
            this.el.value ='';
            this.FetchAll();
        }

    };

    // READ \\
    this.FetchAll = function() {
        var data ='';

        if(this.tasks.length > 0) {
            for(i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + ". " + this.tasks[i] + '</td>';
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>';
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-danger">Delete</button></td>';
                data += '</tr>'   
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;

    };

    // UPDATE \\
    this.Edit = function(item) {

    };

    // DELETE \\
    this.Delete = function(item) {
        
    };

    this.Count = function(data) {

    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}