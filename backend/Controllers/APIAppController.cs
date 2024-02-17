using DropAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DropAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class APIAppController : ControllerBase
{
    private readonly APIAppService _apiAppService;

    public APIAppController(APIAppService apiAppService) =>
        _apiAppService = apiAppService;

    [HttpGet]
    [Authorize]
    public async Task<List<ApiApp>> Get() => await _apiAppService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<ApiApp>> Get(string id)
    {
        var api = await _apiAppService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        return api;
    }

    [HttpPost]
    public async Task<IActionResult> Post(ApiApp newAPI)
    {
        await _apiAppService.CreateAsync(newAPI);

        return CreatedAtAction(nameof(Get), new { id = newAPI.Id }, newAPI);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, ApiApp updatedAPI)
    {
        var api = await _apiAppService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        updatedAPI.Id = api.Id;

        await _apiAppService.UpdateAsync(id, updatedAPI);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var api = await _apiAppService.GetAsync(id);

        if (api is null)
        {
            return NotFound();
        }

        await _apiAppService.RemoveAsync(id);

        return NoContent();
    }
}