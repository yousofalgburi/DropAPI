using DropAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace DropAPI.Services;

public class APIAppService
{
    private readonly IMongoCollection<ApiApp> _apisCollection;

    public APIAppService(IOptions<DropAPIDatabaseSettings> apiStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(apiStoreDatabaseSettings.Value.ConnectionString);
        var mongoDatabase = mongoClient.GetDatabase(apiStoreDatabaseSettings.Value.DatabaseName);
        _apisCollection = mongoDatabase.GetCollection<ApiApp>(apiStoreDatabaseSettings.Value.ApisCollectionName);
    }

    public async Task<List<ApiApp>> GetAsync(string userId) =>
        await _apisCollection.Find(x => x.UserId == userId).ToListAsync();

    public async Task CreateAsync(ApiApp newAPI) =>
        await _apisCollection.InsertOneAsync(newAPI);

    public async Task UpdateAsync(string id, ApiApp updatedAPI) =>
        await _apisCollection.ReplaceOneAsync(x => x.Id == id, updatedAPI);

    public async Task RemoveAsync(string id) =>
        await _apisCollection.DeleteOneAsync(x => x.Id == id);
}