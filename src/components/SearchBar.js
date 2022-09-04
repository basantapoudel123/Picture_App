import React from 'react'

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
    state = {term: ''};

//    onFormSubmit = (e) =>{
     onFormSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.term);
   }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={(e) => this.onFormSubmit(e )} className='ui form'>
                    <div className='field' >
                        <label>Search Image From Unsplash API</label>
                         <input 
                                type="text" 
                                value= {this.state.term}
                                onChange={e =>
                                    this.setState({ term : e.target.value.toUpperCase() })}
                         />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;