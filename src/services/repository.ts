import { IRepository } from '@/types/repository';
import { octokit } from '@configs/octokit';
import { useQuery } from 'react-query';

const fetchRepositories = async (username: string) => {
  const response = await octokit.request(`GET /users/${username}/repos`, {
    username: username,
  });

  return response.data as IRepository[];
};

export const useFetchRepositories = (username: string) => {
  return useQuery(
    ['repositories', username],
    async () => fetchRepositories(username),
    {
      enabled: !!username,
    }
  );
};
