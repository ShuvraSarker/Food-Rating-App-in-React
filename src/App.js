import React from 'react';
import UpDownVote from './UpDownVote';



function Text(props) {
  var style = {
    
    paddingTop: 5,
    margin: 2
    
  };
  
  return (
    <div>
      <div style={style}> {props.label} </div>
      <input
        type="text"
        name={props.name}
        style={style}
        value={props.labelInputText}
        onChange={props.changeHandler}
      />
    </div>
  );
}
function TableFormList(props) {
  return(
    <table>
    <tr>
   {props.headers.map((item,index) => <th key={index}>{item}</th>)}
    </tr>
    <tbody>
    
     {props.formElements.map((item,index) => <tr key={index}><td>{item.Name}</td><td>{item.IName}</td>
     <td>{item.RName}</td><td>{item.Location}</td><td>{item.Price}</td></tr> )}
    </tbody>
</table>
  )
}
  
class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      

        
      Name: "",
      IName: "",
      RName: "",
      Lactoin: "",
      Price: "",
      
      items: []
    };
 
    this.changeHandler = this.changeHandler.bind(this);
    this.AddElementsOnSubmit = this.AddElementsOnSubmit.bind(this);
  }
  
  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  AddElementsOnSubmit() {
    var Name = this.state.Name;
    var ItemName = this.state.ItemName;
    var ResturantName = this.state.ResturantName;
    var Location = this.state.Location;
    var Price = this.state.Price;
    
 
    var elements = this.state.items.slice();
    elements.push({Name: Name, IName: ItemName, RName: ResturantName, Location: Location, Price: Price});
    this.setState({ items: elements, ItemName: "", Itemtype: "",  RName: "", Lactoin: "", Price: "",});
  }
  
  toggle = () =>{
    this.setState({
     on: !this.state.on
    })
  }
  
  render() {
    var style = {
      padding: 5,
      margin: 5
    };
    return (
      
      <div>
       
         {this.state.on && 
         <table frame="box" width="30%" align="center">
         
<center>

        <Text
          label="Name:" 
          name="Name"
          labelInputText={this.state.firstName}
          changeHandler={this.changeHandler}
        />

        <Text
          label="Item Name:"
          name="ItemName"
          labelInputText={this.state.lastName}
          changeHandler={this.changeHandler}
        />
        
        <Text
          label="Resturant Name:"
          name="ResturantName"
          labelInputText={this.state.lastName}
          changeHandler={this.changeHandler}
        />
        
        <Text
          label="Location:"
          name="Location"
          labelInputText={this.state.lastName}
          changeHandler={this.changeHandler}
        />

<Text
          label="Price:"
          name="Price"
          labelInputText={this.state.lastName}
          changeHandler={this.changeHandler}
        />
        
  <input
          type="Submit"
          value="Add This Item"
          style={style}
          onClick={() => this.AddElementsOnSubmit()}
          
        />
    </center>
    
  
    
    </table > 
        }
    <center><button onClick ={this.toggle}>Show/Hide</button></center>
  
    <center> <h1><u> List Of All The Good Mood Foods</u></h1> </center>
    
        <div>
        <table frame="box" width="35%" align="left">

    <TableFormList 
     headers={["Item Name", "Item Type"," Resturant Name", "Location", "Price"]}
     formElements={this.state.items}
     />
          
    </table>
           
        </div>
        
    <table frame="box" width="30%" align="center">
 <tr>
  <ul>
  <option value="Item Name">Beef With Bacon(Burger)</option><br/><br/>
  <option value="Chillox">At Chillox, Dhanmondi</option>
  <UpDownVote />
  </ul>
   
 </tr>

    </table >

    <table frame="box" width="30%" align="left"><br/><br/>
 <tr>
  <ul>
  <option value="Item Name">Italian Pasta</option>
  <option value="Chillox">Shwarma House, Baily Road</option>
  <UpDownVote />
  </ul>
  
 </tr>

    </table >

    
        </div>
    );
  }
}

export default App;