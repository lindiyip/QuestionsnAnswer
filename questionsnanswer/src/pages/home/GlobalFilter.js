import React from 'react';
import { Link } from "react-router-dom";

const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <div className='mt-[100px] flex flex-row-reverse'>
            <div className="basis-1/8 p-5">
                <Link to={`/NewQuestion`} className="primary-button text-lg">New Question</Link>
            </div>
            <div className='basis-3/5 flex-row p-5 pr-30'>
                Search  :
                <input placeholder="Search by keywords" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
            </div>
            
        </div>
    )
}

export default GlobalFilter