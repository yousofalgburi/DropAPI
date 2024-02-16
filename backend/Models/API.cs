using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DropAPI.Models;

public class API
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string OwnerID { get; set; } = null!;
}