import React from 'react';

function Page3({onRouteChange}) {
    console.log('page 333')

    return (
        <div className='pa3'>

            <h1 className='f1'>Welcome to Page 3</h1>

            <button className='f6 link dim ba bw1 ph3 pv2 mb2 dib navy' onClick={() => onRouteChange('page1')}>Page 1
            </button>

            <button className='f6 link dim ba bw1 ph3 pv2 mb2 dib navy' onClick={() => onRouteChange('page2')}>Page 2
            </button>
            <button className='f6 link dim ph3 pv2 mb2 dib white bg-mid-gray disabled'>Page 3</button>

        </div>
    );
}

export default Page3;