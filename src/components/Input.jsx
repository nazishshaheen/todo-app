import React, { useEffect, useState } from 'react'





export default function Input() {

    return (
        <section className='mt-3'>
            <form>
                <div className='row'>
                    <div className='col-10'>
                        <input type="text" className="form-control" placeholder='Enter Your Task here' id="input-elm" />
                    </div>
                    <div className='col-2 d-grid gap-2'>
                        <button className='btn outline-none btn-primary' id='btn'>{"Add"}</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
