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
            Unauthorized("Not authorized.");
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
        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized("Not authorized.");
        }

        bool identifierExists = await _apiAppService.CheckIdentifierExistsAsync(newAPI.Identifier, userId);
        if (identifierExists)
        {
            return BadRequest("Identifier already exists.");
        }

        ApiApp newAPIAuthorized = new()
        {
            UserId = userId,
            Name = newAPI.Name,
            Identifier = newAPI.Identifier,
            Description = newAPI.Description,
        };

        await _apiAppService.CreateAsync(newAPIAuthorized);

        return CreatedAtAction(nameof(Get), new { id = newAPIAuthorized.Id }, newAPIAuthorized);
    }
}