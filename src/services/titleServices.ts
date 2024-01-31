import axios from "axios";

const RAPID_API_KEY = "f3ebaab43amsh5091701e976d199p11ddcdjsna8253cfa57eb";
const RAPID_API_HOST = "moviesdatabase.p.rapidapi.com";
const RAPID_API_BASE_URL = "https://moviesdatabase.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
};

export interface GetManyTitlesResponse<T = any> {
  page: string;
  next: string | null;
  entries: number;
  results: T[] | null;
}

export interface GetSingleTitleResponse<T = any> {
  results: T | null;
}

// TODO: write proper types & type guards
export interface GetManyTitlesParams {
  list?: string;
  limit?: number;
  page?: number;
  info?: string;
}

interface GetSingleTitleParams {
  info?: string; // provide pre-defined list
}

export default {
  getManyTitles: async (
    params?: GetManyTitlesParams
  ): Promise<GetManyTitlesResponse> => {
    const getManyTitlesUrl = `${RAPID_API_BASE_URL}/titles`;
    const response = await axios.get<GetManyTitlesResponse>(getManyTitlesUrl, {
      ...options,
      params,
    });
    return response.data;
  },
  getSingleTitle: async (
    id: string,
    params: Partial<GetSingleTitleParams>
  ): Promise<GetSingleTitleResponse> => {
    const getSingleTitleUrl = `${RAPID_API_BASE_URL}/titles/${id}`;
    const response = await axios.get<GetSingleTitleResponse>(
      getSingleTitleUrl,
      {
        ...options,
        params,
      }
    );
    return response.data;
  },
};
