import { Genre } from './genre';

export class Movie {
  constructor(
    public id: string,
    public name: string,
    public criticRating: number,
	public genres: Genre[]) { }
}