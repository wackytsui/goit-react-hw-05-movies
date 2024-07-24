import propTypes from 'prop-types';
import css from './SearchBar.module.css';
import { HiSearch } from 'react-icons/hi';
import { DebounceInput } from 'react-debounce-input';

export const SearchBar = ({ onChange, value }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className={css.inputHolder}>
      <DebounceInput
       className={css.input}
       type="text"
       value={value}
       onChange={handleChange}
       placeholder="Search movies..."
       minLength={2}
       debounceTimeout={2000}
      />
      <HiSearch className={css.icon} />
    </div>
  );
};

SearchBar.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};