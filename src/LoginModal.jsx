import { Login } from "./Login";

export function LoginModal(props) {
  if (props.show) {
    return (
      <div>
        <section>
          <Login />
          <button className="close" type="button" onClick={props.onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
