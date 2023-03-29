import { useState } from 'react'
import './ProductItem.css'

function ProductItem(props){

    const {id, name, price, count, incrDecrCount, deleteGood} = props

    let [countGood, setCountGood] = useState(count)

    console.log(`${id} был обновлен`)
    console.log(count)

    const deleteHandle = (e) => {
        if (e.target.tagName == 'DIV'){
            deleteGood(id)
        }
    }

    const incrCount = () => {
        setCountGood(++countGood)
    }

    const decrCount = () => {
        setCountGood(--countGood)
    }

    return(
        <div className='div_card' onDoubleClick={(e) => deleteHandle(e)}>
            <h2>{name}</h2>
            <p>{price}</p>
            <div className='div_btn_count'>
                <button onClick={incrCount}>-</button>
                <p>{countGood}</p>
                <button onClick={decrCount}>+</button>
            </div>
        </div>
    )
}


export default ProductItem