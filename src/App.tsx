import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from './common/Button';

type DataType = {
    body: string
    id: number
    title: string
    userId: number
}


function App() {

    const [data, setData] = useState<Array<DataType>>([])
    const cleanData = () => {
      setData([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className="App">
            <Button name={'Clean Data'} callback={cleanData}/>
            <ul>
                {data.map(d => {
                    return <li key={d.id}>
                        <span>{d.id}</span>
                        <span>{d.title}</span>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default App;
