using DropAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.Configure<DropAPIDatabaseSettings>(builder.Configuration.GetSection("DropAPIDatabase"));

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();