const API_URL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2I5NTA0ZWQzMDYxY2FjYjc5MWQwZTBhYjVjNjFiMSIsInN1YiI6IjY0Yzc2YzdhNDFhYWM0MGZiNTQ4YzVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ENl1Jcw_-XSzTkLjcJOcyyDaub1fNYxRRHFGmAFu7ms'
const LANGUAGE = 'zh-CN'

const themoviedb = async (url) => {
  console.info(`${API_URL}${url}?region=${LANGUAGE}`)
  const res = await fetch(`${API_URL}${url}?language=${LANGUAGE}`, {
    headers: {
      Authorization: ACCESS_TOKEN,
      accept: 'application/json'
    }
  })
  const json = await res.json()
  return json
}

export default themoviedb;