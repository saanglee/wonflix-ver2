import React from 'react';
import { useRecoilValue } from 'recoil';
import { useSearchMovie } from '../../hooks/queries';
import { keywordState } from '../../store/search';

const MovieList = () => {
  const keyword = useRecoilValue(keywordState);
  const { status, data } = useSearchMovie(keyword);

  const getResultsByStatus = () => {
    switch (status) {
      case 'loading':
        return <span>Loading...</span>;
      default:
        return (
          <ul>
            {/* {data?.map((item: any) => {
              return <li key={item.id}>{item}</li>;
            })} */}
          </ul>
        );
    }
  };

  return data ? <div>{getResultsByStatus()}</div> : null;
};

export default MovieList;
