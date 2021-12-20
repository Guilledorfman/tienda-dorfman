import React,{useState, useEffect} from 'react'
import ColorPicker from '../ColorPicker/ColorPicker';
import ItemCount from '../ItemCount/ItemCount';
import styles from './ItemDetail.css'


const ItemDetail = ({data}) => {
    
    
    const colors= [
        { value: data[0].photo, id: 1, text:'original', url: data[0].photo},
        { value: 'https://craftypixels.com/placeholder-image/1000x600/d9534f/fff&text=Rojo',id: 2, text:'rojo'},
        { value: 'https://craftypixels.com/placeholder-image/1000x600/0275d8/fff&text=Azul',id: 3, text:'azul'},
        { value: 'https://craftypixels.com/placeholder-image/1000x600/5cb85c/fff&text=Verde',id: 4, text:'verde'},
        { value: 'https://craftypixels.com/placeholder-image/1000x600/f0ad4e/fff&text=Amarillo',id: 5, text:'amarillo'}
    ]
    

    const [option, setOption] = useState(data[0].photo);


    function optionSelected(value){
        setOption(value);
    }

    return (
        <div className="ItemDetail-cont">
            <div className="ItemDetail">
                <div className="row g-0">
                    <div className="col-md-6 detailImg-cont">
                        <img src={option} className="detailImg img-fluid rounded-start" alt={data[0].name}/>
                        {

                            data[0].stock === 0 ?
                            <span class="sinstock badge bg-secondary">SIN STOCK</span> :
                            <></>
                            
                        }
                        
                    <hr/>
                    <div className="colors">
                        <ColorPicker colors={colors} onSelect={optionSelected} defaultOption={option}/> 
                    </div>
                    <hr/>
                    </div>
                    <div className="col-md-6">
                        <div className="buy-tab mt-5">
                            <h5 className="title">{data[0].name}</h5>
                            <p className="text">{data[0].type}</p>

                        </div>
                        <p className="product-info">{data[0].description}</p>
                        <div className="price">
                            <h2>${data[0].price}</h2>

                            {
                                data[0].stock === 0 ?
                                <h5>Sin stock</h5> :
                                <ItemCount data={data}/>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
