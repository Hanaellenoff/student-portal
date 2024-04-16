export default function ResumeIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>Resume</h1>
      <button onClick={() => props.onShowResume(props.resume)}>More Info</button>
    </div>
  );
}
