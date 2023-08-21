'use client';

import { useEffect, useState } from "react"
import { Pagination } from "@nextui-org/react";

import { useSearchContext } from "../context/SearchContext";

import Character from './Character';

import type { CharacterInterface } from '../types';


export function NavPagination({ page, setPage }: { page: number, setPage: (page: number) => void }) {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-wrap py-4 justify-center items-center">
      <Pagination key="md" total={42} initialPage={page} size="md" onChange={handlePageChange} />
    </div>
  );
}


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const { searchQuery } = useSearchContext();

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

      if(searchQuery) {
        apiUrl += `&name=${searchQuery}`;
      };

      const res = await fetch(apiUrl);
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchData();
  }, [page, searchQuery]);

  return (
    <section>
      <NavPagination page={page} setPage={setPage} />
      <div className="container mb-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {characters.map((character: CharacterInterface) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  )

}