import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
    email: z
      .string()
      .min(18, { message: ' must contain @gmail.com' }),
    password:z.string().min(8, { message: 'password must be at least 10 characters.' }),
    repeat_password:z.string().min(8, { message: 'password must be at least 10 characters.' })
  });
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange', 
      });
    
      const onSubmit = (data) => {
        console.log('Form Data:', data);
      };
    
  return (
    <>

<form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
 <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name </label>
    <input
          {...register('name')}
          name="name"
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          placeholder=" Enter your name"
        />
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
    <input
          {...register('email', { valueAsNumber: true })}
          email="email"
          type="text"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder=" Email@gmail.com"
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>} 
         </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">password</label>
    <input
          {...register('password', { valueAsNumber: true })}
          password="password"
          type="text"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder=" password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}  </div>
  <div className="mb-5">
    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Repeat password</label>
    <input
          {...register('password', { valueAsNumber: true })}
          password="password"
          type="text"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder=" Retype your password"
        />
        {errors.repeat_password && <div className="invalid-feedback">{errors.repeat_password.message}</div>}  </div>
        <button className="btn btn-primary w-100" type="submit" disabled={!isValid}>
        Submit
      </button>
  </form>

    </>
  )
}


export default Form

    
