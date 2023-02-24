import styles from './SearchBox.module.scss';

type SearchBoxProps = {
  resultsNumber: number;
  value: string;
  onSearchChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  resultsNumber,
  onSearchChangeHandler,
}: SearchBoxProps) => {
  return (
    <div className={styles.searchBox}>
      <span>{resultsNumber}</span>
      <input
        placeholder="Filter podcasts..."
        type="text"
        onChange={onSearchChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
