using DropAPI.Models;
using DropAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace DropAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class APIController : ControllerBase
{
    private readonly APIService _apisService;

    public APIController(APIService apisService) =>
        _apisService = apisService;

    [HttpGet]
    public async Task<List<API>> Get() =>
        await _apisService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<API>> Get(string id)
    {
        var api = await _apisService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        return api;
    }

    [HttpPost]
    public async Task<IActionResult> Post(API newAPI)
    {
        await _apisService.CreateAsync(newAPI);

        return CreatedAtAction(nameof(Get), new { id = newAPI.Id }, newAPI);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, API updatedAPI)
    {
        var api = await _apisService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        updatedAPI.Id = api.Id;

        await _apisService.UpdateAsync(id, updatedAPI);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var api = await _apisService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        await _apisService.RemoveAsync(id);

        return NoContent();
    }
}