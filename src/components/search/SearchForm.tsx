import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { useGetMovies, useSearchMovie } from '../../hooks/queries';
import { useDebounce } from '../../hooks/useDebounce';
import { keywordState } from '../../store/search';
import { handleKeyDown } from '../../utils/handleKeyDown';

const PLACEHOLDER = '검색어를 입력해주세요.';

const SearchForm = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const debouncedKeyword = useDebounce(keyword, 100);

  // const { data: movies } = useGetMovies();

  const { data: searchResults } = useSearchMovie(debouncedKeyword);
  console.log('keyword : ', keyword);
  console.log('searchResults : ', searchResults);

  return (
    <form onSubmit={() => {}}>
      <input
        type='text'
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDER}
      />
      <button type='submit'>검색</button>
    </form>
  );
};

export default SearchForm;
