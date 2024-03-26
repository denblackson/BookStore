
namespace BookStore.Domain.Models
{
    public class Book
    {
        public Guid Id { get; }
        public string Title { get; } = string.Empty;
        public string Description { get; } = string.Empty;
        public decimal Price { get; }

        private Book(Guid id, string title, string description, decimal price)
        {
            Id = id;
            Title = title;
            Description = description;
            Price = price;
        }

        public static (Book book, string errorMsg) Create (Guid id, string title, string description, decimal price)
    }
}
