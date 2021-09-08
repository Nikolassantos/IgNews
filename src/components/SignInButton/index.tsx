import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

function SignInButton() {
  const [session] = useSession();

  function handleSignIn() {
    signIn('github');
  }

  function handleLogout() {
    signOut();
  }

  return session ? (
    <button
      onClick={handleLogout}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}

export default SignInButton;
