import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className={css.label}> {}
        <span>Find contacts by name</span>
        <input
          type="text"
          id="search"
          value={filter}
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
  );
}
