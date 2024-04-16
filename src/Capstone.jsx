export default function Capstone(props) {
  console.log(props);
  return (
    <div>
      <h1>Capstone</h1>

      <button>Update Capstone</button>

      <p>{props.capstone.name}</p>
      <p>{props.capstone.description}</p>
      <p>{props.capstone.url}</p>
      <p>{props.capstone.screenshot}</p>
    </div>
  );
}
