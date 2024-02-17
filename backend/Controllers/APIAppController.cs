using System.Security.Claims;
using DropAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DropAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class APIAppController : ControllerBase
{
    private readonly APIAppService _apiAppService;

    public APIAppController(APIAppService apiAppService) => _apiAppService = apiAppService;

    [HttpGet]
    [Authorize]
    public async Task<List<ApiApp>> Get()
    {
        var userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

        if (string.IsNullOrEmpty(userId))
        {
            Unauthorized("User ID is required.");
            return [];
        }

        var userApis = await _apiAppService.GetAsync(userId);

        return userApis;
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> Post(ApiApp newAPI)
    {
        string userId = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value ?? string.Empty;

        ApiApp newAPIAuthorized = new()
        {
            UserId = userId,
            Name = newAPI.Name,
            Description = newAPI.Description,
        };

        await _apiAppService.CreateAsync(newAPIAuthorized);

        return CreatedAtAction(nameof(Get), new { id = newAPIAuthorized.Id }, newAPIAuthorized);
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