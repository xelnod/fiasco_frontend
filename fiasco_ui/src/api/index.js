import FiascoFetcher from '@/utils/fiasco-fetcher';

export const getCurrentUser = () => new Promise((resolve, reject) => {
  FiascoFetcher.get('http://localhost:8000/rest-auth/user/')
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const register = data => new Promise((resolve, reject) => {
  FiascoFetcher.post('http://localhost:8000/register/', data)
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const login = data => new Promise((resolve, reject) => {
  FiascoFetcher.post('http://localhost:8000/rest-auth/login/', data)
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const logout = () => new Promise((resolve, reject) => {
  FiascoFetcher.post('http://localhost:8000/rest-auth/logout/')
    .then(response => resolve(response))
    .catch(response => reject(response));
});
