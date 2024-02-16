using DropAPI.Models;
using Google.Protobuf.WellKnownTypes;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DropAPI.Services;

public class APIService
{
    private readonly IMongoCollection<API> _apisCollection;

    public APIService(IOptions<DropAPIDatabaseSettings> apiStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(apiStoreDatabaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(apiStoreDatabaseSettings.Value.DatabaseName);
        _apisCollection = mongoDatabase.GetCollection<API>(apiStoreDatabaseSettings.Value.ApisCollectionName);
    }

    public async Task<List<API>> GetAsync() =>
        await _apisCollection.Find(_ => true).ToListAsync();

    public async Task<API?> GetAsync(string id) =>
        await _apisCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(API newAPI) =>
        await _apisCollection.InsertOneAsync(newAPI);

    public async Task UpdateAsync(string id, API updatedAPI) =>
        await _apisCollection.ReplaceOneAsync(x => x.Id == id, updatedAPI);

    public async Task RemoveAsync(string id) =>
        await _apisCollection.DeleteOneAsync(x => x.Id == id);
}