using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class ApiApp
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("UserId")]
    public string UserId { get; set; } = null!;

    [BsonElement("Name")]
    public string Name { get; set; } = null!;

    [BsonElement("Identifier")]
    public string Identifier { get; set; } = null!;

    [BsonElement("Description")]
    public string Description { get; set; } = null!;

    [BsonElement("IsActive")]
    public bool IsActive { get; set; } = false;

    // Embedding ApiEndpoints in ApiApp
    [BsonElement("Endpoints")]
    public List<ApiEndpoint> Endpoints { get; set; } = new List<ApiEndpoint>();
}
