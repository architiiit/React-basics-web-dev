import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        // console.log(newTitle)
        //console.log(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
        // console.log(newDate);
    }


    // const [fullProductInput,setfullProductInput]=useState({
    //     title:'',
    //     date:''
    // });

    // function setfullProductInput(event,prevState){
    //     //return object with updated parameters
    //     return {...prevState,title:event.target.value};
    // }

    
    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate 
        };

        //console.log(productData);
        props.onSaveProduct(productData);
        
        setTitle('');
        setDate('');
    }

//Props need handler function


    return (<form onSubmit={submitHandler}>
    <div className='new-product__controls'>
        <div className='new-product__control'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            {/* props are required to handle events which starts with "on" prefix */}
        </div>
        <div className='new-product__control'>
            <label>Date</label>
            <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;