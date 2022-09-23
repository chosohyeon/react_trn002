import React from 'react'

const Advertisement = () => {
    return (
        <section className='Advertisement'>
            <div className='inner'>
                <h2>
                    A transitional scent of the green forest<br />
                    of Wimbledon, London SW19<br />
                    that changes over time
                </h2>
                <p>
                    시간에 따라 변화하는, 런던 윔블던 숲 속의 향
                </p>
                <div className='btn'>
                    <button className='left' type="button" onclick="/' ">SW19 Story</button>
                    <button className='right' type="button" onclick="/' ">Shop</button>
                </div>
            </div>
        </section>
    )
}

export default Advertisement