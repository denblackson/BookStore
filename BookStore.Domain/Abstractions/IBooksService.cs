using BookStore.Domain.Models;

namespace BookStore.Domain.Abstractions;

public interface IBooksService
{
    Task<List<Book>> GetAllBooks();
    Task<Guid> CreateBook(Book book);
    Task<Guid> UpdateBook(Guid id, string title, string description, decimal price);
    Task<Guid> DeleteBook(Guid id);
}