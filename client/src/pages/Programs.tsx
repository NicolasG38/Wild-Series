import { useEffect, useState } from "react";

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Fetch programs data from the serverwild-series/
    fetch("http://localhost:3310/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPrograms(data))
      .catch((error) => {
        // Optionally handle error
        console.error(error);
      });
  }, []);

  interface Program {
    id: number;
    title: string;
    poster: string;
    synopsis: string;
    country: string;
    year: number;
  }
  return (
    <div className="container">
      <h1>Programs</h1>
      <p>Welcome to the Programs page!</p>

      {programs.map((program: Program) => (
        <>
          <h2 key={program.id}>{program.title}</h2>
          <p key={program.id}>{program.synopsis}</p>
          <p key={program.id}>Country: {program.country}</p>
          <p key={program.id}>Year: {program.year}</p>
          <img key={program.id} src={program.poster} alt={program.title} />
        </>
      ))}
    </div>
  );
}
