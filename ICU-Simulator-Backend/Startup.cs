using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using Simulation.Data;

namespace ICU_Simulator_Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SimulationContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("Connection")));
            services.AddCors();
            services.AddControllers().AddNewtonsoftJson();
            //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<IScenarioRepo, ScenarioRepo>();
            services.AddScoped<IConditionRepo, ConditionRepo>();
            services.AddScoped<ISymptomRepo, SymptomRepo>();
            services.AddScoped<IInputRepo, InputRepo>();
            services.AddScoped<IParameterRepo, ParameterRepo>();
            services.AddScoped<IPatientProfileRepo, PatientProfileRepo>();
            services.AddScoped<IQuizRepo, QuizRepo>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            
            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials());

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
