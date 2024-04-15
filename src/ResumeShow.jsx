export function ResumeShow(props) {
  console.log(props);
  return (
    <div>
      <h1>Resume info</h1>
      <p>Link: {props.resume.link}</p>
    </div>
  );
}
