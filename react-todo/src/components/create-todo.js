import  React,{Component } from 'react';

class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.updateDescription = this.updateDescription.bind(this);
        this.updateResponsibility = this.updateResponsibility.bind(this);
        this.updatePriority = this.updatePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            description:'',
            responsibility:'',
            priority:'',
            completed:false
        }
    
    }
     

    

    updateDescription(e){
        console.log(e.target.value);
        let data = e.target.value;
        this.setState((prevState,props) => ({description:data}))
  // this.setState({description:e.target.value})
    }

    updateResponsibility(e){
        let data = e.target.value;
        this.setState((prevState,props) => ({responsibility:data}))
    }

    updatePriority(e){
        let data = e.target.value;
        this.setState((prevState,props) => ({priority:data}));
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`description` + this.state.description);
        console.log(`responsibility` + this.state.responsibility);
        console.log(`completed` + this.state.completed);
        console.log(`priority` + this.state.priority);
        this.setState((prevState,props) => {
            return {
                description:'',
                responsibility:'',
                priority:'',
                completed:false
            }
        })
    }
  
    render() {
        return (
            <div style={{marginTop:20}}>
                <h3>Create New Todo</h3>
            <form onSubmit={this.onSubmit}>
             <div className="form-group">
             <label>Description: </label>
             <input type="text"
                   className="form-control"
                   value={this.state.description}
                   onChange={(e) => {this.updateDescription(e)}}/>
             </div>
             <div className="form-group">
             <label>Responsible: </label>
             <input type="text"
                   className="form-control"
                   value={this.state.responsibility}
                   onChange={this.updateResponsibility}/>
             </div>
             <div className="form-group">
              <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityLow"
                     value="Low"
                     checked={this.state.priority==="Low"}
                     onChange={this.updatePriority}    
              />
              <label className="form-check-label">Low</label>
              </div>
             </div>
             <div className="form-group">
              <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityMedium"
                     value="Medium"
                     checked={this.state.priority==="Medium"}
                     onChange={(e) => {this.updatePriority(e)}}    
              />
              <label className="form-check-label">Medium</label>
              </div>
             </div>
             <div className="form-group">
              <div className="form-check">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityHigh"
                     value="High"
                     checked={this.state.priority==="High"}
                     onChange={this.updatePriority}    
              />
              <label className="form-check-label">High</label>
              </div>
             </div>
             <div className="form-group">
             <input type="submit" className="btn btn-primary  " value="Create Todo"/>
             </div>
            </form>    
            </div>
        )
    }
}

export default CreateTodo;