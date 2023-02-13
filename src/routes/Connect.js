import React, { useEffect, useState } from 'react';
import '../styles/Connect.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";

const Connect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [buttonState, handleButtonState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleButtonState("Sending...");
        const newValues = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            tel:  values.tel,
            referral: values.referral,
            service: values.service,
            goals: values.goals,
            message: values.message
        }

        try {
            emailjs.send("service_mwwn0ge", "template_cjrhc8h", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                handleButtonState('Sent');
                handleButtonDisabled(true);
            })
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const referredBy = {
        google: "Google",
        instagram: "Instagram",
        friend: "Referred by a friend",
        other: "Other"
    };
    const services = {
        meditation: "Meditation Initiation",
        sadhana: "Sadhana Development",
        himalayan: "Himalayan Integrated Practice"
    };

    const contactFormSchema = Yup.object().shape({
        first_name: Yup.string().min(2, '* First name is too short').max(20, "* 20 maximum characters").required('* Required'),
        last_name: Yup.string().min(2, '* Last name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        tel: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(15, '* Phone number is too long').required("* Required"),
        referral: Yup.string().oneOf(Object.values(referredBy), "* Must select a valid option").required("* Required"),
        service: Yup.string().oneOf(Object.values(services), "* Must select a valid option").required("* Required"),
        goals: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters").required("* Required"),
        message: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters")
    });

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
    <>
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            className='small-width connect-page'
        >
            <main id='connect'>
                <section className='content'>
                    <h2 className='h1'>Connect</h2>
                    <div className='social-wrap'>
                        <a href='https://www.instagram.com/cosmicbreathing/' target='_blank'>
                            <span>
                                <svg width='20px' aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 18 18">
                                    <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                                    <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className='form-wrap'>
                        <Formik 
                            initialValues={{ first_name: "", last_name: "", email: "", tel: "", referral: "", service: "", message: "" }}
                            validationSchema={contactFormSchema}
                            onSubmit={submitForm}
                        > 
                            <Form id='contact-form' className='form'>
                                <fieldset className='fieldset'>
                                    <div className='flex wrap'>
                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="first_name" id='first_name'>
                                                    First
                                                </label>
                                                <Field
                                                    name="first_name"
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='first_name' />
                                        </div>

                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="last_name" id='last_name'>
                                                    Last
                                                </label>
                                                <Field
                                                    name="last_name"
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='last_name' />
                                        </div>
                                    </div>

                                    <div className='flex wrap'>
                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="email" id='email'>
                                                    Email
                                                </label>
                                                <Field
                                                    name="email"
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='email' />
                                        </div>

                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="tel" id='tel'>
                                                    Tel
                                                </label>
                                                <Field
                                                    name="tel"
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='tel' />
                                        </div>
                                    </div>

                                    <div className='flex wrap'>
                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="referral" id='referral'>
                                                    How did you find me?
                                                </label>
                                                <Field
                                                    name='referral'
                                                    as='select'
                                                >
                                                    <option value=''>Select an Option</option>
                                                    <option value='Google'>Google</option>
                                                    <option value='Instagram'>Instagram</option>
                                                    <option value='Referred by a friend'>Referred by a friend</option>
                                                    <option value='Other'>Other</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage component="div" className='error' name='referral' />
                                        </div>

                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="service" id='service'>
                                                    Which service are you interested in?
                                                </label>
                                                <Field
                                                    name='service'
                                                    as='select'
                                                >
                                                    <option value=''>Select an Option</option>
                                                    <option value='Meditation Initiation'>Meditation Initiation</option>
                                                    <option value='Sadhana Development'>Sadhana Development</option>
                                                    <option value='Himalayan Integrated Practice'>Himalayan Integrated Practice</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage component="div" className='error' name='service' />
                                        </div>
                                    </div>

                                    <div className='flex wrap'>
                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="goals" id='goals'>
                                                    What are your goals?
                                                </label>
                                                <Field
                                                    name='goals'
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='goals' />
                                        </div>

                                        <div className='field-wrap'>
                                            <div className='flex column-reverse'>
                                                <label htmlFor="message" id='message'>
                                                    How else can I help you?
                                                </label>
                                                <Field
                                                    name='message'
                                                />
                                            </div>
                                            <ErrorMessage component="div" className='error' name='message' />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className='btn-wrap'>
                                    <button className="btn" type="submit" disabled={buttonDisabled}>
                                        {buttonState}
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </motion.div>
    </>
    );
}

export default Connect;