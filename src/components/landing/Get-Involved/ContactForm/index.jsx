import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { url } from 'data/config';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

const ContactForm = () => (
	<Formik
		initialValues={{
			name: '',
			email: '',
			volunteer: false,
			information: false,
			recaptcha: '',
			success: false,
		}}
		validationSchema={Yup.object().shape({
			name: Yup.string().required('Full name field is required'),
			email: Yup.string()
				.email('Invalid email')
				.required('Email field is required'),
		})}
		onSubmit={async (
			{ name, email, information, volunteer },
			{ setSubmitting, resetForm, setFieldValue }
		) => {
			try {
				await axios({
					method: 'post',
					url: 'https://v1.nocodeapi.com/rishabhbajpai/google_sheets/ONPcQhrfxiYtVEvt?tabId=Sheet1',
					params: {},
					data: [name, email, volunteer.toString(), information.toString()],
				});
				setSubmitting(false);
				setFieldValue('success', true);
				setTimeout(() => resetForm(), 6000);
			} catch (err) {
				setSubmitting(false);
				setFieldValue('success', false);
				alert('Something went wrong, please try again!');
			}
		}}
	>
		{({ values, touched, errors, setFieldValue, isSubmitting }) => (
			<Form>
				<InputField>
					<Input
						as={FastField}
						type="text"
						name="name"
						component="input"
						aria-label="name"
						placeholder="Full name*"
						error={touched.name && errors.name}
					/>
					<ErrorMessage component={Error} name="name" />
				</InputField>
				<InputField>
					<Input
						id="email"
						aria-label="email"
						component="input"
						as={FastField}
						type="email"
						name="email"
						placeholder="Email*"
						error={touched.email && errors.email}
					/>
					<ErrorMessage component={Error} name="email" />
				</InputField>
				<InputField>
					<label> Interested in Volunteering?</label>
					<Input
						as={FastField}
						component="checkbox"
						aria-label="volunteer"
						id="volunteer"
						name="volunteer"
						value="volunteer"
						error={touched.message && errors.message}
					/>
					<ErrorMessage component={Error} name="volunteer" />
				</InputField>
				<InputField>
					<label> Get More Information </label>
					<Input
						as={FastField}
						component="checkbox"
						aria-label="information"
						id="information"
						name="information"
						value="information"
						error={touched.message && errors.message}
					/>
					<ErrorMessage component={Error} name="information" />
				</InputField>
				{values.success && (
					<InputField>
						<Center>
							<h4>
								Your message has been successfully sent, I will get back to you
								ASAP!
							</h4>
						</Center>
					</InputField>
				)}
				<Center>
					<Button secondary type="submit" disabled={isSubmitting}>
						Submit
					</Button>
				</Center>
			</Form>
		)}
	</Formik>
);

export default ContactForm;
