using API_Application.Interfaces;
using API_Application.Services;

namespace QR_API.Middlewares
{
    public static class Resolver
    {
        public static void AddResolvers(this IServiceCollection services)
        {
            services.AddScoped<ICityService, CityService>();
            //services.AddSingleton<Encrypt_Decrypt>();
        }
    }
}
