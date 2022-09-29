import React from 'react';
import { useRecoilValue } from 'recoil';
// import { useSearchMovie } from '../../../hooks/queries';
import { keywordState } from '../../../store/global';
import DropdownItem from './DropdownItem';

const Dropdown = () => {
  const tempFilteredData: string[] = [];
  const keyword = useRecoilValue(keywordState);

  const renderFilteredTitles = (): JSX.Element[] => {
    const filteredTitles = tempFilteredData.map(
      (title: string, idx: number) => {
        return <DropdownItem key={`${title}_${idx}`} title={title} />;
      }
    );
    return filteredTitles;
  };
  return (
    <>
      {tempFilteredData ? (
        <span>검색 결과가 없습니다.</span>
      ) : (
        <div>
          <div>0개의 검색 결과가 있습니다.</div>
          {renderFilteredTitles()}
        </div>
      )}
    </>
  );
};

export default Dropdown;
