import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Login() {
    return (
        <Container className='mt-5'>
            <h3>Login Form</h3>
            <Form>
                <Form.Group className="mb-3" controlId="emailId">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
            </Form>
        </Container>
    );
}

export default Login;