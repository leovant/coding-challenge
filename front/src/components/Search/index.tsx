import React from 'react';
import { Formik, FormikHelpers, Field, FieldProps } from 'formik'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row';

import { SearchForm, SearchProps } from '../../types';
import { Spinner } from 'react-bootstrap';

const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  function onSubmit(values: SearchForm, { setSubmitting }: FormikHelpers<SearchForm>) {
    setSubmitting(false);

    return onSearch(values);
  }

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={ onSubmit }
    >
      {
        ({handleSubmit, values}) => (
          <Form onSubmit={ handleSubmit }>
            <Row>
              <Col>
                <Field name="query">
                  {({ field }: FieldProps) => (
                    <FormGroup controlId="query">
                      <FormControl {...field} type="text" placeholder="Search..." />
                    </FormGroup>
                  )}
                </Field>
              </Col>
              <Col xs={1} md={2}>
                <Button type="submit" className="d-flex w-100 position-relative text-center" disabled={loading || !values.query}>
                  { loading && (<Spinner as="span" animation="border" className="position-absolute" style={{ top: 1, right: 1 }}/>)}
                  <span className="w-100 text-center">Search</span>
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
}

export default Search;
