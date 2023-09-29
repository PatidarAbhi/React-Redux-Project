import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Show from "./Show";



const Add = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lastName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const employeeData = {
            id: formData.id,
            name: formData.name,
            lastName: formData.lastName,
        };
        dispatch({ type: "ADDEMP", payload: employeeData })
        setFormData({ id: '', name: '', lastName: '' });
        dispatch({ type: 'Home' })
    }
    return (
        <> <div>Add function
        </div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">First Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">AddEmp</button>
                </div>
            </form>
        </>

    );
}
export default Add;
