import { IUser } from '@/types/user';
import { octokit } from '@configs/octokit';
import { useQuery } from 'react-query';

const fetchSearchUser = async (keyword: string) => {
  const response = await octokit.request('GET /search/users', {
    q: keyword,
    per_page: 5,
  });

  return response.data.items as IUser[];
};

export const useSearchUsers = (keyword: string) => {
  return useQuery(['users', keyword], () => fetchSearchUser(keyword), {
    enabled: !!keyword,
  });
};
