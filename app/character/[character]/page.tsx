export function generateStaticParams() {
  return ["Tidus", "Yuna", "Auron", "Kimahri", "Wakka", "Lulu", "Rikku"].map(
    (character) => ({
      charId: character,
    })
  );
}

type CharacterDetail = {
  id: number;
  role: string;
  name: string;
  description: string;
  image: string;
  image_height: number;
  image_width: number;
  formation: string;
  sphere_grid: string;
  overdrive_title: string;
  overdrive: string;
};

type Props = {
  params: {
    charId: string;
  };
};

export default async function Page({ params: { charId } }: Props) {
  const charactersResponse = await fetch(
    `http://localhost:3000/api/get-character-detail`
  );
  const charactersData = await charactersResponse.json();

  return (
    <div>
      {
        // Array.isArray(charactersData.character_detail) &&
        charactersData.character_detail
          // .filter((character: CharacterDetail) => character.name === charId)
          .map((character: CharacterDetail) => (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          ))
      }
    </div>
  );
}
