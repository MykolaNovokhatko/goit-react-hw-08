import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <label className={css.lable}>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
  );
}