using Simulation.Models;
using Microsoft.EntityFrameworkCore;

namespace Simulation.Data
{
    public class SimulationContext : DbContext
    {
        public SimulationContext(DbContextOptions<SimulationContext> opt) : base(opt)
        {

        }
        public DbSet<Scenario> Scenarios { get; set; }
    }
}