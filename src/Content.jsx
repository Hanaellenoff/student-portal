/* eslint-disable no-unused-vars */
import { ResumeModal } from "./ResumeModal";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const resume = [
    {
      id: 1,
      link: "google.com",
    },
    {
      id: 2,
      link: "amazon.com",
    },
  ];
  return (
    <div>
      <ResumeModal show={true}>
        <h1>test</h1>
      </ResumeModal>
    </div>
  );
}
