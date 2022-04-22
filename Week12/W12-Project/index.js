/*

1) Start buy making a site about something that interests you
2) Come up with a class to contain all of the objects in your class
3) Within class, create methods to update class elements

*/

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
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>';
                data += '</tr>'   
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;

    };

    // UPDATE \\
    this.Edit = function(item) {
        el = document.getElementById('edit-to-do');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = "block";
        self=this;

        document.getElementById('save-edit').onsubmit = function() {
            var task = el.value;
            if(task) {
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }

    };

    // DELETE \\
    this.Delete = function(item) {
        this.tasks.splice(item, 1)
        this.FetchAll();

    };

    this.Count = function(data) {
        var el = document.getElementById('counter');
        var name = 'Tasks';
        if(data){
            if(data == 1) {
                name = 'Task';
            }
            el.innerHTML = data + ' ' + name;
        }
        else {
            el.innerHTML = "No " + name;
        }
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}