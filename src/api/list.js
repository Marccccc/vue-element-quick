import fetch from '@/utils/fetch'

export function getStatusLogs (params) {
  return fetch({
    method: 'get',
    url: '/log/status',
    params
  })
}
