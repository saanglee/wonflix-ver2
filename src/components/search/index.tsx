import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useDebounce } from '../../hooks/useDebounce';
import { keywordState } from '../../store/global';
import styles from './searchInput.module.scss';
import { handleKeyDown } from '../../utils/handleKeyDown';
import Button from '../Button';
import Typography from '../Typography';

const PLACEHOLDER = '검색어를 입력해주세요.';

const SearchInput = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const debouncedKeyword = useDebounce(keyword, 100);

  // const { data: searchResults } = useSearchMovie(debouncedKeyword);

  return (
    <form onSubmit={() => {}} className={styles.searchInputContainer}>
      <Button
        children={<Typography children={'Search'} type={'B1'} />}
        size={'default'}
      />
      <input
        type='text'
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDER}
      />
    </form>
  );
};

export default SearchInput;
