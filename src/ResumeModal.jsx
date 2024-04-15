import "./ResumeModal.css";

export function ResumeModal(props) {
  if (props.show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {props.children}
          <button className="close" type="button" onClick={props.onClose}>
            More Info
          </button>
        </section>
      </div>
    );
  }
}
