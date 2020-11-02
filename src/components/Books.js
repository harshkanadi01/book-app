import React from 'react';
import './BookDetails.css';
class Books extends React.Component {

    constructor(){
        super();
        this.state={title: '', author: '',title1: 'To Kill a Mockingbird ', author1: 'Harper Lee.',
                    title2: 'Harry Potter and the Philosopher Stone', author2: "J.K. Rowling",
                    title3: 'Pride and Prejudice', author3:'Jane Austen'    }
    }
    handleClick() {
        // if(this.state.title!=this.state.title1)
        alert("Not Found")
        
    }

    render(){
        return(
            <div className='book'>
                <br/>
            <h3 className='span1'>Other Books</h3>
            <ol>
        <p className='span2'>{this.state.title1}- {this.state.author1}</p>
        <p className='span2'>{this.state.title2}- {this.state.author2}</p>
        <p className='span2'>{this.state.title3}- {this.state.author3}</p>
            </ol>
            <input type="text" value={this.state.title}></input>
            <button onClick={this.handleClick}>Search</button>
            </div>

        )
    }
}

export default Books