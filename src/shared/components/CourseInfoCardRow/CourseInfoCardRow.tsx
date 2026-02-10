import styles from './CourseInfoCardRow.module.css';

function CourseInfoCardRow({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className={styles.infoRow}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.infoValue}>{value}</span>
    </div>
  );
}

export default CourseInfoCardRow;
