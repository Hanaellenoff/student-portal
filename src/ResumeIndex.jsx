export default function ResumeIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>Resume</h1>
      <p>{props.resume.first_name}</p>
      <p>{props.resume.email}</p>
      <p>{props.resume.linkedin_url}</p>
      <button onClick={() => props.onShowResume(props.resume)}>More Info</button>
    </div>
  );
}
