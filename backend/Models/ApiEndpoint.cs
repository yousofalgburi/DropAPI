using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class ApiEndpoint
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Path")]
    public string Path { get; set; } = null!;

    [BsonElement("HttpMethod")]
    public string HttpMethod { get; set; } = null!;

    [BsonElement("ResponseConfig")]
    public string ResponseConfig { get; set; } = null!;
}
