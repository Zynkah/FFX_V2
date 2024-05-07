export function generateStaticParams() {
  return ["Tidus", "Yuna", "Auron", "Kimahri", "Wakka", "Lulu", "Rikku"].map(
    (char) => ({
      charId: char,
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
      {charactersData.character_detail
        // .filter((char: CharacterDetail) => char.name === charId) // change toa charId
        .map((char: CharacterDetail) => (
          <div key={char.id}>
            <h2>{char.name}</h2>
            <p>{char.description}</p>
          </div>
        ))}
    </div>
  );
}
