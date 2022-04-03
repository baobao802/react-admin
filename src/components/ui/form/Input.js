import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
} from '@chakra-ui/react';
import React from 'react';

const Input = ({ register, name, errors, label, fieldClassName, ...rest }) => {
  const error = errors[name];
  return (
    <FormControl isInvalid={error} className={fieldClassName}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        {...register(name)}
        focusBorderColor='inherit'
        {...rest}
      />
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
