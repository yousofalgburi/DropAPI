using DropAPI.Models;
using DropAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.Configure<DropAPIDatabaseSettings>(builder.Configuration.GetSection("DropAPIDatabase"));
builder.Services.AddSingleton<APIService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();