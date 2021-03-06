import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VStack } from '@chakra-ui/react';

const Form = ({
  defaultValues,
  validationSchema,
  children,
  onSubmit,
  ...rest
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <VStack as='form' onSubmit={handleSubmit(onSubmit)} {...rest}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child;
      })}
    </VStack>
  );
};

export default Form;
