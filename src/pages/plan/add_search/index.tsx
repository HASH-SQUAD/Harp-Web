//라이브러리
import React, { useState } from 'react';
import { useQuery } from 'react-query';

//파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import Search from 'assets/image/Search';
import AddPlanContent from 'components/AddPlanContent';
import { GetKeywordFood, ApiResponse, Document } from 'lib/apis/LocationSearch';
import useDebounce from 'hooks/useDebounce';

const AddSearch: React.FC = () => {
  const statusBarHeight = useStatusBarHeight();
  const [query, setQuery] = useState<string>('');

  const debouncedQuery = useDebounce({ value: query, delay: 200 });

  const { data, isLoading, isFetching, error } = useQuery<ApiResponse, Error>(
    ['searchResults', debouncedQuery],
    () => GetKeywordFood({ query: debouncedQuery }),
    {
      enabled: !!debouncedQuery,
      refetchOnWindowFocus: false,
      retry: 0,
      onError: (e) => {
        console.error(e);
      }
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <_.AddSearch_Container StatusBarSize={`${statusBarHeight}px`}>
      <Header title="일정추가" />
      <_.AddSearch_Layout>
        <_.AddSearch_SearchBar>
          <Search />
          <_.AddSearch_SearchBar_Input
            placeholder="목적지를 입력해보세요."
            value={query}
            onChange={handleInputChange}
          />
        </_.AddSearch_SearchBar>

        <_.AddSearch_Content>
          {isLoading || isFetching ? (
            <p>검색 중...</p>
          ) : error ? (
            <p>오류가 발생했습니다. 다시 시도해 주세요.</p>
          ) : data && data.documents.length > 0 ? (
            data.documents.map((item: Document) => (
              <AddPlanContent
                key={item.id}
                Title={item.place_name}
                Address={item.road_address_name || item.address_name}
                Time="시간 정보를 여기에 추가하세요."
              />
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </_.AddSearch_Content>
      </_.AddSearch_Layout>
    </_.AddSearch_Container>
  );
};

export default AddSearch;
