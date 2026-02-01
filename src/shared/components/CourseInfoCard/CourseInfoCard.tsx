import styles from './CourseInfoCard.module.css';

function CourseInfoCard() {
  return (
    <div className={styles.courseInfoCard}>
      <h2>Description:</h2>
      <div className={styles.courseDetails}>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <hr className={styles.separator} />
        <div className={styles.courseInfo}>
          <div className={styles.infoRow}>
            <h3 className={styles.title}>ID:</h3>
            <span className={styles.infoValue}>231j3j-b34g5-b345m</span>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.title}>Duration:</h3>
            <span className={styles.infoValue}>23:35 hours</span>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.title}>Created:</h3>
            <span className={styles.infoValue}>01.01.2023</span>
          </div>
          <div className={styles.infoRow}>
            <h3 className={styles.title}>Authors:</h3>
            <span className={styles.infoValue}>
              Anna Sidorenko, Valentina Larina
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfoCard;
