import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { object, string, } from 'yup';






const phoneBookSchema = object().shape({
    name: string().required(),
    phone: string().required(),
});





export const PhonebookForm = ({onSubmit}) => {
    // console.log(onSubmit)
    return (
        <Formik
            validationSchema={phoneBookSchema}
            initialValues={{
                name: '',
                phone: ''}}
            onSubmit={(values,{ resetForm }) => { 
                
                onSubmit({
                    ...values,
                    id: nanoid()
                }) 
                resetForm()
            }}>
            
            <Form>
                <label>Name
                <Field name="name"/>
                </label>
                <label>
                    Number <Field
                        type="phone"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"/>
                </label>


            <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

PhonebookForm.propTypes = {
    onSubmit: PropTypes.func,
}

