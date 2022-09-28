import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email address is not valid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className='contact-section'>
            <h2 className='section-title primary-border'>
                Contact Me
            </h2>
            <Form id='contact-form' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='name'>Name:</Form.Label>
                    <Form.Control type='text' defaultValue={name} onBlur={handleChange} name='name' className='form' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email Address:</Form.Label>
                    <Form.Control type='email' defaultValue={email} onBlur={handleChange} name='email' className='form' />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='message'>Message:</Form.Label>
                    <Form.Control as="textarea" name='message' defaultValue={message} onBlur={handleChange} rows={5} className='formMessage' />
                    {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <Button variant='primary' type='submit' className='mt-3'>Submit</Button>
                </Form.Group>
            </Form>
        </section>
    )
}

export default ContactForm;