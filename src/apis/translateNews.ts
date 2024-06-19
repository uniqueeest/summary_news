const DEEPLE_URL = process.env.NEXT_PUBLIC_DEEPL_URL;
const DEEPL_API_KEY = process.env.NEXT_PUBLIC_DEEPL_API_KEY;

export const translateNews = async (newsList: string[]) => {
  const response = await fetch(`${DEEPLE_URL}/v2/translate`, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      text: newsList,
      target_lang: 'KO',
      source_lang: 'EN',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  return await response.json();
};
