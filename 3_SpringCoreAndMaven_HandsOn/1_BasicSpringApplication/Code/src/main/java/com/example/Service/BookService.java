package com.example.Service;

import com.example.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for Dependency Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookInfo() {
        System.out.println(bookRepository.getBookDetails());
    }
}
