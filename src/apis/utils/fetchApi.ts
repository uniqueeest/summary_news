type FetchAPIOptions = {
  variables?: Record<string, any>;
  headers?: Record<string, string>;
  apiKey?: string;
};

async function fetchAPI(
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'HEAD',
  url: string,
  { variables, headers }: FetchAPIOptions = {}
): Promise<any> {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const fetchOptions: RequestInit = {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  };

  // GET 요청일 경우 body를 포함하지 않음
  if (method !== 'GET' && method !== 'HEAD' && variables) {
    fetchOptions.body = JSON.stringify(variables);
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    const error = await res.json();
    console.error('Fetch error:', error);
    throw new Error(error.message || 'Failed to fetch API');
  }

  const json = await res.json();

  return json.data;
}

export default fetchAPI;
