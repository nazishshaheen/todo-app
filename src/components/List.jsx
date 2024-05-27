import React from 'react'

export default function List({tasks, id}) {
    return (
        <section className='mt-5'>
            <ul className="list-group">
                {
                    tasks.length > 0 ? tasks.map((value, index) => {
                        return <li className="list-group-item" key={index}>{value}</li>
                    }) : <li className="list-group-item">No Todo</li>
                }
            </ul>
        </section>
    )
}
