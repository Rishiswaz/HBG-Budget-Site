import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { url } from 'data/config';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

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
		onSubmit={(values, actions) => {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 'form-name': 'contact', ...values }),
			})
				.then(() => {
					alert('Success');
					actions.resetForm();
				})
				.catch(() => {
					alert('Error');
				})
				.finally(() => actions.setSubmitting(false));
		}}
	>
		{({ values, touched, errors, setFieldValue, isSubmitting }) => (
			<Form name="contact" data-netlify={true}>
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
						as={Field}
						component="checkbox"
						aria-label="volunteer"
						id="volunteer"
						name="volunteer"
						value="volunteer"
					/>
					<ErrorMessage component={Error} name="volunteer" />
				</InputField>
				<InputField>
					<label> Get More Information </label>
					<Input
						as={Field}
						component="checkbox"
						aria-label="information"
						id="information"
						name="information"
						value="information"
					/>
					<ErrorMessage component={Error} name="information" />
				</InputField>
				{values.success && (
					<InputField>
						<Center>
							<h4>
								Your message has been successfully sent, we will get back to you
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
