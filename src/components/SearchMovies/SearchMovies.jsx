import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { FormWrapper, Button } from './SearchMovies.styled';

export const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.search);
    actions.resetForm();
  };

  return (
    <FormWrapper>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <Field type="text" name="search" />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
