using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
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
            services.AddDbContext<SimulationContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("ConnectionRemote")));
            services.AddCors();
            services.AddControllers().AddNewtonsoftJson();
            services.AddSwaggerGen();
            //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<IScenarioRepo, ScenarioRepo>();
            services.AddScoped<IConditionRepo, ConditionRepo>();
            services.AddScoped<ISymptomRepo, SymptomRepo>();
            services.AddScoped<IInputRepo, InputRepo>();
            services.AddScoped<IParameterRepo, ParameterRepo>();
            services.AddScoped<IPatientProfileRepo, PatientProfileRepo>();
            services.AddScoped<IQuizRepo, QuizRepo>();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseRouting();

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                options.RoutePrefix = string.Empty;
            });

            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials());

            app.UseAuthorization();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
