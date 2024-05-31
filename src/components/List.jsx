import React from 'react'

export default function List(props) {
    return (
        <section className='mt-5'>
            <ul className="list-group">
                {
                    props.tasks.length > 0 ? props.tasks.map((value, index) => {
                        return <li className="list-group-item d-flex justify-content-between" key={index}>
                            {value}
                            <div>
                                <button
                                    className='btn btn-warning btn-sm me-3'
                                    disabled={(props.dataObj.index === -1) ? false : true}
                                    onClick={() => props.updateTask(index, value)}>
                                    Edit
                                </button>
                                <button
                                    className='btn btn-danger btn-sm'
                                    disabled={(props.dataObj.index === -1) ? false : true}
                                    onClick={() => props.deleteTask(value)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    }) : <li className="list-group-item">No Todo</li>
                }
            </ul>
        </section>
    )
}
