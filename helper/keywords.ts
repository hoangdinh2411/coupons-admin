export const getKeyWordsArray = (keywords: string): string[] => {
  return keywords !== '' ? keywords.split(',').map((item) => item.trim()) : [];
};

export const getKeyWordsString = (keywords: string[]): string => {
  return keywords.length > 0
    ? keywords.map((item) => item.trim()).join(', ')
    : '';
};
