package com.qa.baetraining.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.qa.baetraining.domain.Movie;
import com.qa.baetraining.exceptions.*;
import com.qa.baetraining.repo.MovieRepo;

@Service
public class MovieService {
	private MovieRepo repo;

	public MovieService(MovieRepo repo) {
		this.repo = repo;
	}
	
	public Movie getById(long id) {
	try {
		return repo.findById(id).orElseThrow(MovieNotFound :: new);
	}catch (MovieNotFound e) {
		System.out.println(e.getMessage());
		return null;
		}
	}
	
	public Movie findMovie(String movieTitle){
		return repo.findMovie(movieTitle);
	}
	
	public List<Movie> allMovies() {
		return this.repo.findAll();		
	}
	public Movie addMovie(Movie movies) {
		return this.repo.saveAndFlush(movies);
	}
	public boolean deleteById(long id) {
		this.repo.deleteById(id);
		return !repo.existsById(id);
	}
	
	public Movie updateMovie(long id, Movie movie) {
		Movie selectedMovie = repo.findById(id).get();
		selectedMovie.setMovieTitle(movie.getMovieTitle());
		selectedMovie.setReleaseYear(movie.getReleaseYear());
		selectedMovie.setRating(movie.getRating());
		selectedMovie.setSeen(movie.isSeen());
		return repo.saveAndFlush(selectedMovie);
	}
	public List<Movie> findByYear(int releaseYear) {
		return repo.findByYear(releaseYear);
	}
	
	//public Movie findByYear(int releaseYear){
		//return repo.findByYear(releaseYear);
	//}
	public List<Movie> findByRating(int rating) {
		return repo.findByRating(rating);
	}
	public List<Movie> findBySeen(boolean seen) {
		return repo.findBySeen(seen);
	}
	
//	public void removeUnderage() {
	//	List <Movie> underagers = repo.findUnderage();
	//	repo.deleteAll(underagers);
//	}
}

