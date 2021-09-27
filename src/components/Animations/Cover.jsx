import cover from 'images/phone-book.png';
import './Cover.scss';

function Cover() {
  return (
    <div className="Cover">
      <img src={cover} alt="Phonebook" />
    </div>
  );
}

export default Cover;
