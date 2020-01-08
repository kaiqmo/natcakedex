import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component';
export const CardList = props =>{
    return (
    <div className="card-list">
        {
            props.cake.map(cake =>
                 <Card key={cake.id} cake={cake} />
                )
          }
    </div>
    )
}