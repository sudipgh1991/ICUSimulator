using Simulation.Models;
using Microsoft.EntityFrameworkCore;

namespace Simulation.Data
{
    public class SimulationContext : DbContext
    {
        public SimulationContext(DbContextOptions<SimulationContext> opt) : base(opt) {}

        public DbSet<Scenario> Scenarios { get; set; }
        public DbSet<Condition> Conditions { get; set; }
        public DbSet<Symptom> Symptoms { get; set; }
        public DbSet<Input> Inputs { get; set; }
        public DbSet<Parameter> Parameters { get; set; }
        public DbSet<PatientProfile> PatientProfiles { get; set; }
        public DbSet<Quiz> Quiz { get; set; }

    }
}