import React, { useState } from 'react'

function Tabledata(props) {
    const [name, setName] = useState('');
    const [Pass, setPass] = useState('');
    const [Email, setEmail] = useState('');

    const registrationformdata = (event) => {
        event.preventDefault();
        const val = {
            name,
            Pass,
            Email,
        };

        props.func(val);
        console.log("Form Data"+val);
    };

   

    return (
        <div>
            <form onSubmit={registrationformdata}>
                <div className="card mt-5 mb-3" style={{ width: "42rem" }} id="registrationcard">
                    <div className="card-header fw-semibold fs-3">
                        Registration Form
                    </div>
                    <div className="card-body text-start">
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label ">UserName</label>
                            <input type="text" className="form-control" id="formGroupExampleInput1" value={name} placeholder="UserName" onChange={(e) => setName(e.target.value)} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Password" value={Pass} onChange={(e) => setPass(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary ms-1">Add</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Tabledata
