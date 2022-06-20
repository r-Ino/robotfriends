import React, {memo} from 'react';

const SearchBox = ({searchField, searchChange}) => {

    console.log('SearchBox')
    return (
        <div className='pa2'>
        <input
            className='pa3 ba b--green bg-light-blue'
            type='search'
            placeholder='search robot'
            onChange={searchChange}
        />
        </div>
    )

};

export default memo ( SearchBox);