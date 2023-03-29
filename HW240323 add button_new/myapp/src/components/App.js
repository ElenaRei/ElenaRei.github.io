import { useState } from "react"
import ProductItem from "./ProductItem/ProductItem"
import './App.css'

function App(){

    const data = [ 
        {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
        {id: 2, name: 'Самокат', price: 700, count: 1}, 
        {id: 3, name: 'Ролики', price: 1300, count: 2}, 
        {id: 4, name: 'Сноуборд', price: 19000, count: 4}
    ]

    let [goods, setGoods] = useState(data)

    function createGoods(){
        let prompt_result = prompt('Введите через пробел имя товара, стоимость и количество')
        const [newName, newPrice, newCount] = prompt_result.split(' ')
        const newGood = {
            id: Date.now(),
            name: newName,
            price: newPrice,
            count: newCount
        }
        console.log(newGood)
        setGoods([...goods, newGood])
    }

    // const incrDecrCount = (id, param) => {
    //     const newGoods = goods.map(elem => {
    //         if (elem.id === id){
    //             if (param == '+'){
    //                 elem.count++
    //             } else if (param == '-'){
    //                 elem.count--
    //             }
    //         }
    //         return elem
    //     })
    //     setGoods(newGoods)
    // }



    const deleteGood = (id) => {
        const newGoods = goods.filter(elem => elem.id != id)
        setGoods(newGoods)
    }
        
    return(
        <div>
            <div>
                <button onClick={createGoods}>Добавить новый товар</button>
            </div>
            <div className="goods_wraper">
            {goods.map(elem => <ProductItem
                                    id = {elem.id}
                                    key = {elem.id}
                                    name = {elem.name}
                                    price = {elem.price}
                                    count = {elem.count}
                                    // incrDecrCount={incrDecrCount}
                                    deleteGood={deleteGood}
                                />)}
            </div>
        </div>
    )
}


export default App