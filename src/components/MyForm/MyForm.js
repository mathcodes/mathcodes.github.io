import { ValidationError, useForm } from '@formspree/react';
import { TextField } from '@material-ui/core/'

export default function MyForm() {
  const [state, handleSubmit] = useForm("xaykzqea");
  console.log(state)
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="name" type="name" name="name" required />
      <input id="email" type="email" name="email" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>Sign up</button>
    </form>
  )
}