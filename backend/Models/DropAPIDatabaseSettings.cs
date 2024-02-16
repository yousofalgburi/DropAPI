namespace DropAPI.Models;

public class DropAPIDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string ApisCollectionName { get; set; } = null!;
}