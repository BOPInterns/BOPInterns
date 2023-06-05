import { NavigationBar } from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import React from 'react';

export const MyAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('');
    const [ userEdit, setUserEdit ] = useState(false);
    
    return (
        <div>
            <NavigationBar/>
            <Container fluid>
                <hr></hr>
                <Row>
                    <h2>My Account</h2>
                </Row>
                <hr></hr>
                <Row>
                    <Col xs={2}>
                        <Button variant="link">My Account</Button>
                        <br></br>
                        <Button href='/kyc-verification-about' variant="link">Get Verified!</Button>
                        <br></br>
                        <Button variant="link">Privacy</Button>
                    </Col>
                    <Col md={6}>
                        <h3>General Information</h3>
                        <hr></hr>
                        <Card style={{width: '28rem'}}>
                            { userEdit ? <>
                            <Card.Body>
                                First Name: {firstName}
                                <br></br>
                                Last Name: {lastName}
                                <br></br>
                                Email address: {email}
                                <br></br>
                                Password: {password}
                                <br></br>
                                Phone Number: {phoneNumber}
                                <br></br>
                                Verification Status: {verificationStatus}
                                <br></br>
                                <Button onClick={() => setUserEdit(!userEdit)} variant="outline-secondary">Edit</Button>
                            </Card.Body>
                            </> :
                             <Card.Body>
                             <InputGroup>
                                 <InputGroup.Text>First name:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={firstName}
                                 ></Form.Control>
                                 <InputGroup.Text>Last name:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={lastName}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Email:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={email}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Password:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={password}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Phone number:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={phoneNumber}
                                 ></Form.Control>
                             </InputGroup>
                             <InputGroup>
                                 <InputGroup.Text>Verification Status:</InputGroup.Text>
                                 <Form.Control
                                     placeholder={verificationStatus}
                                     disabled
                                 ></Form.Control>
                             </InputGroup>
                             <Button onClick={() => setUserEdit(!userEdit)} variant="outline-secondary">Submit</Button>
                         </Card.Body>
                            }
                        </Card>
                        </Col>
                    <Col md={4}>
                    <Figure>
                            <Figure.Image 
                                width={300}
                                height={100}
                                alt=""
                                src={require('./placeholderProfilePicture.png')}
                            />
                        </Figure>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}