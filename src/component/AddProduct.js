import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();
        await Axios.post('http://localhost:5000/products', {
            title: title,
            price: price
        })
        history('/')
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className='field'>
                    <label className='label'>Title</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Price</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <button className='button is-primary'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;