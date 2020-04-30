import React from 'react'

const Controls = ({ addRandom, sortByName, sortByPopularity }) => (
    <section>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByPopularity}>Sort By Popularity</button>
    </section>
)

export default Controls