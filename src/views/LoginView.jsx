import Container from 'components/Container/Container';

export default function LoginView() {
  return (
    <>
      <Container>
        <form action="POST">
          <input type="text" />
          <input type="text" />
          <button type="submit">LogIn</button>
        </form>
      </Container>
    </>
  );
}
