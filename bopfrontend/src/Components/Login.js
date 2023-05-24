import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
    
    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@domain.com" id="email" name = "email"/>
                <br></br>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name = "password"/>
                <br></br>
            </form> */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/" >
                            <img height="65" width="115" src="https://images.squarespace-cdn.com/content/v1/60e57a13579c8f0509ce7237/03227bce-9951-411b-9f7d-42875ddb8933/New+header+logo.png?format=1500w" alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Campaign Center</Nav.Link>
                        <Nav.Link href="/">Explore</Nav.Link>
                        <Nav.Link href="/">Learn</Nav.Link>
                        <Nav.Link href="/">Become</Nav.Link>
                        <Nav.Link href="/">About us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-contents-end">
                        <Nav className='me-auto'>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className="rows">
                    <Column md={6}>
                    <Image src={BOPLogo} className="img-fluid" height="650" width="650"></Image>
                    </Column>
                    <Column>
                    <Form>
                        <Row>
                            <h4>Sign in with</h4>
                            <Column>
                            <Button>Google</Button>
                            <Button>facebook</Button>
                            <Button>linkedin</Button>
                            <Button>other</Button>
                            </Column>
                        </Row>
                        <Row>
                            or
                        </Row>
                        <FloatingLabel
                            controlId="floatingEmailInput"
                            label="Email Address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingEmailInput"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FloatingLabel>
                        <Column md={{offset: 8}}>
                            <Button variant="link">Forgot password?</Button>
                        </Column>
                        <Form.Check
                            type="switch"
                            id="rememberMe"
                            label="Remember me"
                        >
                        </Form.Check>
                        <Button>
                            Submit
                        </Button>
                        <Column>
                            Don't have an account?
                            <Button variant="link">Register</Button>
                        </Column>
                    </Form>
                    </Column>
                </Row>
            </Container>
            {/* <div class="container h-custom">
                <div class="row d-flex jusify-content-center align-items-center h-100">
                    <div class="class-md-9 col-lg-6 col-xl-5">
                        <img src={BOPLogo} class="img-fluid" alt="BOP Logo"/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-linkedin-f"></i>
                                </button>
                                
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-google-f"></i>
                                </button>
                            </div>
                            <div class="divider d-flex align-items-center my4">
                                <p class="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            
                            <div class="form-outline mb-4">
                                <input type="email" id="emailInput" class="form-control form-control-lg" placeholder="Enter a valid email address"/>
                                <label class="form-label" for="emailInput">Email Address</label>
                            </div>
                            
                            <div class="form-outline mb-4">
                                <input type="email" id="passwordInput" class="form-control form-control-lg" placeholder="Enter password"/>
                                <label class="form-label" for="emailInput">Password</label>
                            </div>
                            
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Remember me
                                </label>
                                </div>
                                <a href="#!" class="text-body">Forgot password?</a>
                            </div>
                            
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                >Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    class="link-danger">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </div> */}
            <Navbar bg="dark" expand="lg" variant="light">
                <Container>
                <Navbar.Brand href="/" >
                            <img height="65" width="115" src="https://images.squarespace-cdn.com/content/v1/60e57a13579c8f0509ce7237/03227bce-9951-411b-9f7d-42875ddb8933/New+header+logo.png?format=1500w" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text>
                        Copyright &copy 2021 BOP Hub Limited - All Rights Reserved
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}