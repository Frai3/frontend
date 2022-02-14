import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate();
    const {id} = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await Axios.patch(`http://localhost:5000/products/${id}`, {
            title: title,
            price: price
        })
        history('/')
    }

    useEffect(() => {
        getProductById()
    }, [])

    const getProductById = async () => {
        const response = await Axios.get(`http://localhost:5000/products/${id}`)
        setTitle(response.data.title)
        setPrice(response.data.price)
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
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
                    <button className='button is-primary'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;