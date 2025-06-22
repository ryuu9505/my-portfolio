import {
  SearchBarContainer,
  SearchInputWrapper,
} from '@styles/layout/SearchBarStyles';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar({ open }) {
  const [hideInput, setHideInput] = useState(!open);

  // 트랜지션 끝날 때만 input을 숨김
  const handleTransitionEnd = () => {
    if (!open) setHideInput(true);
  };

  useEffect(() => {
    if (open) setHideInput(false);
  }, [open]);

  return (
    <SearchBarContainer open={open} onTransitionEnd={handleTransitionEnd}>
      <SearchInputWrapper>
        <FiSearch size={32} color="#888" style={{ marginRight: 16 }} />
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus={open}
          tabIndex={hideInput ? -1 : 0}
          style={{ visibility: hideInput ? 'hidden' : 'visible' }}
        />
      </SearchInputWrapper>
    </SearchBarContainer>
  );
}

export default SearchBar;
