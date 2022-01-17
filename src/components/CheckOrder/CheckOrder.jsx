import React from 'react'

const CheckOrder = ({loading, order, status}) => {


    return (
        <div>

             {loading ? <h2>LOADING</h2> : 

                status === 'error' ? <h1>ERROR</h1> :
                <>
                    {order.items.map(e=>{
                        return(
                            <div key={e.id}>
                                <h2>{e.name}</h2>
                                <h2>{e.price}</h2>
                            </div>
                        )
                    })}
                    <h2>{order.total}</h2>
                </>
            }


        </div>
    )
}

export default CheckOrder
