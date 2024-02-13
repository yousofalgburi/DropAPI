using Microsoft.AspNetCore.Mvc;

[ApiController]
public class TestController : ControllerBase
{
    [HttpGet("/test")]
    public IActionResult TestFunction()
    {
        return Ok("Test Function Called");
    }
}
