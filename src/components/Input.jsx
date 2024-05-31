import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function Input(props) {
    const [task, setTask] = useState('');

    const inputChange = (event) => {
        setTask(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (props.dataObj.index > -1) {
            props.editTask(props.dataObj.index, task);
            return;
        }
        if (task) {
            props.addTask(task);
            setTask('');
            toast.success('Task added Successfully');
        } else {
            toast.error('Plzz Enter Your Task');
        }

    }
    useEffect(() => {
        setTask(props.dataObj.data);
        document.querySelector('#input-elm').focus();
    }, [props.dataObj.data, props.dataObj.index]);

    return (
        <section className='mt-3'>
            <form onSubmit={submit}>
                <div className='row'>
                    <div className='col-10'>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Enter Your Task here'
                            id="input-elm"
                            value={task}
                            onChange={inputChange}
                        />
                    </div>
                    <div className='col-2 d-grid gap-2'>
                        <button
                            className='btn outline-none btn-primary'
                            id='btn'>
                            {
                                props.dataObj.index === -1 ? "Add" : "Update"
                            }
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
