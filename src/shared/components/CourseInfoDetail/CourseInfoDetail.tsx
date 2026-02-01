function CourseInfoDetail({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <h4 style={{ fontWeight: '700px', fontSize: '16px' }}>{title}</h4>
      <span style={{ fontSize: '16px' }}>{value}</span>
    </div>
  );
}

export default CourseInfoDetail;
