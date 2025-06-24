export const getKeyWordsArray = (keywords: string): string[] => {
  return keywords.split(',').map((item) => item.trim()) ?? [];
};

export const getKeyWordsString = (keywords: string[]): string => {
  return keywords.map((item) => item.trim()).join(', ') ?? '';
};
