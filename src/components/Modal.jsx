import "./Modal.css";

function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Modal;