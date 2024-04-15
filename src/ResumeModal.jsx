export function ResumeModal(props) {
  if (props.show) return <div className="modal-background">{props.children}</div>;
}
