import classes from './NotificationHandling.module.css';

const NotificationHandling = (props) => {
    let specialClass = '';

  if (props.status === 'error') {
    specialClass = classes.error;
  }
  if (props.status === 'success') {
    specialClass = classes.success;
  }

  const cssClass= `${classes.notification} ${specialClass}`;

  return (
    <section className={cssClass}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default NotificationHandling;