import React, { useRef, useState } from 'react';
import { Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';

/* import react toastify if needed */

function Login() {
    let isLogged = false
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false)

        if (emailRef.current.value.trim() === "") {
            alert("¡Email vacío!");
            emailRef.current.focus();
            setEmail(false)
            setError(true)
            }    
            
        if (passwordRef.current.value.trim() === "") {
            alert("Contraseña vacía!");
            passwordRef.current.focus();
            setPassword(false)
            setError(true)
            }     

        if (error != false){
            alert(`El email ingresado es ${email} y el password ${password}`)
            emailRef.current.style.border = "none"
            passwordRef.current.style.border = "none"
        }else{
            if(email === false){
                emailRef.current.style.border = "1px solid red"
            }else{
                passwordRef.current.style.border = "1px solid red"
            }

        }

           
    
    };

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <Card className="mt-5 mx-3 pt-3 pr-3 pl-3 px-5 shadow justify" style={{ width: '50%', height: '50%' }}>
                <Card.Body>
                    <Row>
                        <h5>¡Bienvenidos a Books Champion!</h5>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="mb-4">
                            <Form.Control
                                ref={emailRef}
                                type="text" //cambiar a email
                                required
                                placeholder="Ingresar email"
                                onChange={(e) => {
                                    setEmail(e.target.value)}}
                            />
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Form.Control
                                ref={passwordRef}
                                type="password"
                                required
                                placeholder="Ingresar contraseña"
                                onChange={(e) => {
                                    setPassword(e.target.value)}}
                            />
                        </FormGroup>
                        <Row>
                            <Col />
                            <Col md={6} className="d-flex justify-content-end">
                                <Button variant="secondary" type="submit">
                                    Iniciar sesión
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login