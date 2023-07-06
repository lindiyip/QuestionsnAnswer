import React from 'react';

const GlobalFilter = ({ filter, setFilter}) => {
    return (
        <div className='mt-[100px] flex flex-row bg-gray-50'>
            <div className='basis-3/5 flex-row p-5 pr-30'>
                Search  :
                <input placeholder="Search by keywords" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
            </div>
            
        </div>
    )
}

export default GlobalFilter