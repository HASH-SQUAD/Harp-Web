//라이브러리
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

//파일
import * as _ from './style';
import Header from 'components/Header';
import Search from 'assets/image/Search';
import AddPlanContent from 'components/AddPlanContent';
import { GetKeywordData, ApiResponse, Document } from 'lib/apis/LocationSearch';
import useDebounce from 'hooks/useDebounce';
import SearchBarX from 'assets/Icon/SearchBarX';
import SearchError from 'assets/Icon/SearchError';
import SearchLoading from 'assets/image/SearchLoading.gif';

const AddSearch = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const location = useLocation();
  const { planInfos } = location.state;
  const [query, setQuery] = useState<string>('');

  const debouncedQuery = useDebounce({ value: query, delay: 200 });

  const { data, isLoading, isFetching, error } = useQuery<ApiResponse, Error>(
    ['searchResults', debouncedQuery],
    () => GetKeywordData({ query: debouncedQuery }),
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

  const onClickIcon = (address: string) => {
    navigate(`/plan/info/${id!}/add`, {
      state: { address: address, planInfos: planInfos }
    });
  };

  return (
    <_.AddSearch_Layout>
      <Header title="일정추가" />
      <_.AddSearch_Container>
        <_.AddSearch_SearchBar>
          <_.AddSearch_SearchBar_Left>
            <Search />
            <_.AddSearch_SearchBar_Input
              placeholder="목적지를 입력해보세요."
              value={query}
              onChange={handleInputChange}
            />
          </_.AddSearch_SearchBar_Left>
          <_.AddSearch_SearchBar_ClearIcon onClick={() => setQuery('')}>
            <SearchBarX />
          </_.AddSearch_SearchBar_ClearIcon>
        </_.AddSearch_SearchBar>

        <_.AddSearch_Content>
          {isLoading || isFetching ? (
            <_.AddSearch_LoadingLayout>
              <_.AddSearch_Content_Loading src={SearchLoading} alt="" />
            </_.AddSearch_LoadingLayout>
          ) : error ? (
            <_.AddSearch_NoCotent>
              <SearchError />
              <_.AddSearch_NoCotent_TextBox>
                <_.AddSearch_NoCotent_Title>
                  검색결과가 없습니다.
                </_.AddSearch_NoCotent_Title>
                <_.AddSearch_NoCotent_SubTitle>
                  일시적인 문제로 검색 결과를 불러오지 못했습니다.
                </_.AddSearch_NoCotent_SubTitle>
              </_.AddSearch_NoCotent_TextBox>
              <_.AddSearch_NoCotent_RestartButton
                onClick={() => {
                  window.location.reload();
                }}
              >
                다시시도하기
              </_.AddSearch_NoCotent_RestartButton>
            </_.AddSearch_NoCotent>
          ) : data && data.documents.length > 0 ? (
            data.documents.map((item: Document) => (
              <AddPlanContent
                onClickIcon={() => {
                  onClickIcon(item.road_address_name);
                }}
                key={item.id}
                Title={item.place_name}
                Address={item.road_address_name || item.address_name}
              />
            ))
          ) : (
            <_.AddSearch_NoCotent>
              <SearchError />
              <_.AddSearch_NoCotent_TextBox>
                <_.AddSearch_NoCotent_Title>
                  검색결과가 없습니다.
                </_.AddSearch_NoCotent_Title>
                <_.AddSearch_NoCotent_SubTitle>
                  단어철자에 문제가 있는지 확인해주세요.
                </_.AddSearch_NoCotent_SubTitle>
              </_.AddSearch_NoCotent_TextBox>
            </_.AddSearch_NoCotent>
          )}
        </_.AddSearch_Content>
      </_.AddSearch_Container>
    </_.AddSearch_Layout>
  );
};

export default AddSearch;
