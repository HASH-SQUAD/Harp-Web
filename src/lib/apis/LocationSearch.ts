import { KakaoInstance } from './Axios';

// Document 타입
export interface Document {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name?: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

// Meta 타입
interface Meta {
  is_end: boolean;
  pageable_count: number;
  same_name: {
    keyword: string;
    region: string[];
    selected_region: string;
  };
  total_count: number;
}

// 전체 반환 타입
export interface ApiResponse {
  documents: Document[];
  meta: Meta;
}

// params 타입
interface GetKeywordFoodParams {
  query: string;
  page?: number;
  size?: number;
}

const API_KEY = `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`;

export const GetKeywordFood = async (
  params: GetKeywordFoodParams
): Promise<ApiResponse> => {
  const { data } = await KakaoInstance.get<ApiResponse>(
    `/v2/local/search/keyword`,
    {
      params: {
        query: params.query,
        page: params.page || 1,
        size: params.size || 15
      },
      headers: {
        Authorization: API_KEY
      }
    }
  );
  return data;
};
