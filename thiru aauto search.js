
Class AutoComplete extends Component{
     constructor 
    handleChange=()=>{
       //using api call  to  with the values
    }

  
  render(){
    const {value={},suggestedvalue={},ph={}}=this.props;
    return(
     <select value={this.state.value} onChange={this.handleChange} placeholder={ph}>
      suggestedvalue.map(i=>{
          return(
              <option value={i.id}>{i.value}</option>
          )
      })
     </select>
        )
  }
}

export default AutoComplete;


import AutoComplete from "AutoComplete";

//Using with api call 
class Name extends Component{

    
    render(){
       let value = [
      { id: 0, value: 'ruby' },
      { id: 1, value: 'javascript' },
      { id: 2, value: 'lua' },
      { id: 3, value: 'go' },
      { id: 4, value: 'julia' }
    ]
        return(
            <AutoComplete ph="Enter the langauage" suggestedvalue={items}/>
        )
    }
}