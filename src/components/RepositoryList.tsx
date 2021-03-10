import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository{
  name: string;
  description:string;
  html_url: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  fetch("https://api.github.com/users/vamaral2020/repos")
    .then((response) => response.json())
    .then((data) => setRepositories(data));
  useEffect(() => {}, []); //nunca deixe sem o segundo parametro;

  return (
    <section className="repository-list">
      <h1>Listagem de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
