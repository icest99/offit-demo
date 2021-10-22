import React from 'react';


// data 
import data from './data/data.json'

//components
import Count from './components/Count';

export default function TestCount() {
    return (
        <div className="App" class="inline-block flex">
      {data.counts.map(count => <Count key={count.id} data={count}/>)}
    </div>
    )
}
