import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {

    constructor(props){
 
        super(props);
        this.state= {
            description: '',
            amount: '',
            note: '',
            createdAt: moment(),
            focused: false,
            error: ''
        }
    }

    componentDidMount(){
        if(this.props.expense){
            this.setState(()=>({
                description: this.props.expense.description,
                amount: (this.props.expense.amount/100).toFixed(2),
                note: this.props.expense.note,
                createdAt: moment(this.props.expense.createdAt)
            }));
        }
    }    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
        
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
        
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if(!this.state.amount || !this.state.description){
            this.setState(() => ({error: "Please enter the description and amount"}));
        } else{
            this.setState(() => ({error: ""}));
            this.props.onSubmit({
                description: this.state.description, 
                note: this.state.note, 
                amount: parseFloat(this.state.amount)*100, 
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                       type='text' placeholder='description' 
                        value={this.state.description} onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text' placeholder='amount' 
                        value={this.state.amount} onChange={this.onAmountChange}
                    />
                    <div>
                        <SingleDatePicker 
                            date={this.state.createdAt} 
                            numberOfMonths={1} 
                            onDateChange= {this.onDateChange}
                            focused={this.state.focused} 
                            isOutsideRange={() => false} 
                            onFocusChange = {({ focused }) => (this.setState( {focused} ))}
                            showDefaultInputIcon={true}
                        />
                    </div>  
                    <textarea 
                        placeholder='Please add a note for your expense (optional)' 
                        value={this.state.note} onChange={this.onNoteChange}>
                    </textarea>
                    <button>
                    {!this.props.expense ? `Add Expense` : `Update Expense`}
                    </button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;