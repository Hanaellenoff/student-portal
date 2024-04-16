export default function User(props) {
  return (
    <div>
      <h1>
        {props.user.first_name} {props.user.last_name}
      </h1>
      <p>{props.user.email}</p>
      <p>{props.user.phone_number}</p>
      <p>{props.user.short_bio}</p>
      <p>{props.user.linkedin_url}</p>
      <p>{props.user.twitter_handle}</p>
      <p>{props.user.personal_url}</p>
      <p>{props.user.github_url}</p>
      <p>{props.user.photo}</p>
    </div>
  );
}
