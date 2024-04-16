export default function CapstoneIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>Capstone</h1>
      <button onClick={() => props.onShowCapstone(props.capstone)}>More Info</button>
    </div>
  );
}
