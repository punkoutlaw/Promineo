import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Navigation from './Navigation';

class Messages extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Messages',
      act: 0,
      index: '',
      entries: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  Submit = (e) =>{
    e.preventDefault();

    let entries = this.state.entries;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address
      }
      entries.push(data);
    }else{                      //update
      let index = this.state.index;
      entries[index].name = name;
      entries[index].address = address;
    }    

    this.setState({
      entries: entries,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Remove = (i) => {
    let entries = this.state.entries;
    entries.splice(i,1);
    this.setState({
      entries: entries
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Edit = (i) => {
    let data = this.state.entries[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let entries = this.state.entries;
    return (
      <div>
        <Navigation />
        <main style={{ padding: "2rem 0" }}>
          <Card>
          <Card.Header><strong>{this.state.title}</strong></Card.Header>
          <Card.Body>
            <Card.Title>New Message</Card.Title>
              <form ref="myForm" className="form-control">
                <input type="text" ref="name" placeholder="Name" className="form-control" />
                <br></br>
                <textarea type="text" ref="address" placeholder="Message" className="form-control" />
                <br></br>
                <button onClick={(e)=>this.Submit(e)} className="btn btn-primary"> Send </button>
              </form>
              <br></br>
              <pre>
                {entries.map((data, i) =>
                  <li key={i} className="form-control bg-light">
                    {i+1}. {data.name}: {data.address}
                    <br></br>
                    <button onClick={()=>this.Edit(i)} className="btn btn-warning"> Edit </button>
                    <button onClick={()=>this.Remove(i)} className="btn btn-danger"> Delete </button>
                  </li>
                )}
              </pre>
        </Card.Body>
        <Card.Footer> © 2022 INSTAGRAM FROM META </Card.Footer>
        </Card>
        </main>
      </div>
    );
  }
}

export default Messages;