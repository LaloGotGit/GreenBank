import React from 'react'
import { Container, FormWrap, FormContent, FormH1, Icon, Form, FormLabel, FormInput,  FormButton, Text} from './SigninElements'

const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to='/'>GreenBank</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>Ingresa a tu cuenta</FormH1>
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' required/>
                          <FormLabel htmlFor='for'>Contraseña</FormLabel>
                          <FormInput type='password' required/>
                          <FormButton type='submit'>Ingresar</FormButton>
                          <Text>¿Problemas para acceder a tu cuenta?</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn
