import { useState } from 'react';

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/ł/g, 'l');

const useSearch = (data, fields) => {
  const [query, setQuery] = useState('');

  const search = () => {
    const searchValue = normalize(query);

    return data.filter((item) => {
      if (searchValue.length === 0) return true;

      return fields(item).some((field) => {
        const value = field ? normalize(field) : '';
        return value.includes(searchValue);
      });
    });
  };
  const filteredData = search();
  return { query, setQuery, data: filteredData };
};

export default useSearch;
