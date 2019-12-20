import React, { Component } from 'react'

export class Item extends Component {
    state={
        product_id:null,
        qty:1
    }
    render() {
        return (
            <div>
                <div className="center">
                    <button>-</button>
                    <h1>Prodct</h1>
                    <button>+</button>

                </div>
            </div>
        )
    }
}

export default Item
