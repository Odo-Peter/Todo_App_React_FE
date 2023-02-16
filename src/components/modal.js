const Modal = ({ name, handleModal, handleNameChange }) => {
  return (
    <div className="welcome-section">
      <p>
        Welcome to your customizable TODO web app, please enter your NAME to
        begin 🥰
      </p>
      <input value={name} onChange={handleNameChange} />
      <button type="submit" onClick={handleModal}>
        Continue
      </button>
    </div>
  );
};

export default Modal;
