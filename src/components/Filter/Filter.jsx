import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { getFilter } from 'redux/selectors';
import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="Filter">
      <label>
        <span>Find by Name</span>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
