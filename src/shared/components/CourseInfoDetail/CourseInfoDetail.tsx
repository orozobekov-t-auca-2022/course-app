import styles from './CourseInfoDetail.module.css';

function CourseInfoDetail({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div className={styles.infoRow}>
      <h4 className={styles.infoTitle}>{title}</h4>
      {'\u00A0'}
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}

export default CourseInfoDetail;
