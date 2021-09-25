import './Button.scss';

export default function Button({ text }) {
  return (
    <>
      <button type="submit" className="Form__btn">
        {text}
      </button>
    </>
  );
}
