import Container from 'components/Container/Container';

export default function RegistrationView() {
  return (
    <>
      <Container>
        <form action="POST">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Register</button>
        </form>
      </Container>
    </>
  );
}
