using DropAPI.Models;
using DropAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

var builder = WebApplication.CreateBuilder(args);

var domain = $"https://{builder.Configuration["Auth0:Domain"]}/";

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = domain;
        options.Audience = builder.Configuration["Auth0:Audience"];
        options.TokenValidationParameters = new TokenValidationParameters
        {
            NameClaimType = ClaimTypes.NameIdentifier
        };
    });

builder.Services.AddControllers();
builder.Services.Configure<DropAPIDatabaseSettings>(builder.Configuration.GetSection("DropAPIDatabase"));
builder.Services.AddSingleton<APIAppService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowSpecificOrigins",
    builder =>
    {
        builder.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("read:apiapp", policy => policy.Requirements.Add(new HasScopeRequirement("read:apiapp", domain)));
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigins");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();