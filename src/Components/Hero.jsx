import React from 'react'

const Hero = () => {
    let name = "halleluyah";
    let Age = 20

    const clickMe = (num) => {
        let display = `${num} is already here`
        console.log(display);
        document.getElementById('show').innerHTML = display
    }



    const Add = () => {
        Age++;
        let display = `${Age} is already here`
        console.log(display);
        document.getElementById('show2').innerHTML = display
    }


    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={() => clickMe(12)} className='rounded lg shadow-cyan-500 bg-blue-300'>clickMe</button>
            <button onClick={() => Add()} className='rounded lg shadow-cyan-500 bg-blue-300'>Age  </button>
            <div id='show'></div>
            <div id='show2'></div>
        </div>
    )
}

export default Hero