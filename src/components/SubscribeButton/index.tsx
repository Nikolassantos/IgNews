import styles from './styles.module.scss';
import { ISubscribeButtonProps } from './types';

function SubscribeButton(props: ISubscribeButtonProps) {
  const { priceId } = props;

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}

export default SubscribeButton;
