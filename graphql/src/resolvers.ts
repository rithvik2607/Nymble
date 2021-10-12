import { genres, movies } from "./db"
import { inclRating, getMovies } from "./controller"

const resolvers = {
    Query: {
        movies: (parent: any, args: { search?: string }, context: any) => getMovies(args.search),
        genres: (parent: any, args: any, context: any) => genres,
    },
    Mutation: {
        addRating: async (parent: any, args: { movieId: number, rating: number }, content: any) => {
            let movie = movies.find(movie => movie.id === args.movieId);
            if(movie === undefined) {
                return "Error: ID does not exist";
            }
            else {
                inclRating(movie, args.rating);
                return movie;
            }
        }
    }
}

export default resolvers