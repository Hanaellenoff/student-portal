export default function Capstone() {
  const capstone = {
    linkedin_url: "linkedin.url",
    twitter_handle: "twitter.url",
    github_url: "github.url",
  };

  return (
    <div>
      <h1>Capstone</h1>
      <p>{capstone.linkedin_url}</p>
      <p>{capstone.twitter_handle}</p>
      <p>{capstone.github_url}</p>
    </div>
  );
}
