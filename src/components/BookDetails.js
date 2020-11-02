import React from 'react';
import './BookDetails.css';
class BookDetails extends React.Component{
    render(){
        return(
            <div>
            <nav>
                <span className='span1'>Authors:</span> <span className='span2'>Harsh, Piyush, Rupinder</span>
            </nav>
            <nav>
                 <span className='span1'>Publishers:</span> <span className='span2'>Lala Publishers</span>
            </nav>
            </div>
        )
    }
}
export default BookDetails;