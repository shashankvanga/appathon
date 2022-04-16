import React from 'react'

function Registration() {
    return (
        <div>
            <form>
                <h1>Register</h1>
                <div className = 'form-group'>
                    <label>Name</label>
                    <input
                    type = 'text'
                    className = 'form-control'
                    placeholder = 'Enter full name'

                    />

                </div>
            </form>
        </div>
    )
}