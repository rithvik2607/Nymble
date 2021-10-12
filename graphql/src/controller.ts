import { movies } from "./db";
import { Movie } from "./types";

export function getMovies(search?: string): Movie[] {
    // TODO
    if(search === "") return movies;
    else return movies.filter(movie => movie.title === search)
}

export function inclRating(movie: Movie, rating: number): Movie {
    let n: number = movie.vote_count;
    let avg: number = movie.vote_average;
    avg = n*avg;
    movie.vote_average = (avg + rating) / (n + 1);
    movie.vote_count++;
    return movie;
}