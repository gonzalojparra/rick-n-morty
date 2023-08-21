import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import type { CharacterInterface } from '../types';

export default function Character({ character }: { character: CharacterInterface }) {
  return (
    <div key={character.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <Card className="overflow-hidden rounded-lg shadow-lg">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{character.name}</h4>
          <small className="text-default-500">{character.status} - {character.species}</small>
        </CardHeader>
        <CardBody className="overflow-visible">
          <Image
            alt={character.name}
            className="object-cover rounded-xl"
            src={character.image}
            width={270}
            isBlurred
          />
          <p className="mt-4 font-normal">{character.origin.name}</p>
        </CardBody>
      </Card>
    </div>
  )
}