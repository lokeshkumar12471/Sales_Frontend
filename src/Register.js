import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password_confirmation: '',
        error_list: [],
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: formData.name,
                mobile: formData.mobile,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation
            }
            const response = await axios.post('http://127.0.0.1:8000/api/register', data);

            if (response.data.status === 400) {
                setFormData({ ...formData, error_list: response.data.errors });
            } else {
                swal("Success!", response.data.message, "success");
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    error_list: [],
                });
                navigate('/dashboard');
            }
        } catch (errors) {
            console.error("Registration Failed Please try Again");
        }
    }

    return (
        <Container className='mt-5'>
            <h3>Register Form</h3>
            <Form onSubmit={submitHandler} autoComplete="off">
                <Form.Group className="mb-3" controlId="nameId">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={changeHandler} />
                    {formData.error_list.name && (
                        <span className="text-danger">{formData.error_list.name[0]}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailId">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={changeHandler} />
                    {formData.error_list.email && (
                        <span className="text-danger">{formData.error_list.email[0]}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobileId">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" name="mobile" placeholder="Enter Your Mobile" value={formData.mobile} onChange={changeHandler} />
                    {formData.error_list.mobile && (
                        <span className="text-danger">{formData.error_list.mobile[0]}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordId">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Your Password" value={formData.password} onChange={changeHandler} />
                    {formData.error_list.password && (
                        <span className="text-danger">{formData.error_list.password[0]}</span>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmpasswordId">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password_confirmation" placeholder="Enter Your Confirm Password" value={formData.password_confirmation} onChange={changeHandler} />
                    {formData.error_list.password_confirmation && (
                        <span className="text-danger">{formData.error_list.password_confirmation[0]}</span>
                    )}
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </Container>
    );
}
export default RegistrationForm;