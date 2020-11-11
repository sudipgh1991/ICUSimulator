using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class ScenarioRepo : IScenarioRepo
    {
        private readonly SimulationContext _context;

        public ScenarioRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateScenario(Scenario cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Scenarios.Add(cmd);
        }

        public void DeleteScenario(Scenario cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Scenarios.Remove(cmd);
        }

        public IEnumerable<Scenario> GetAllScenarios()
        {
            return _context.Scenarios.ToList();
        }

        public Scenario GetScenarioById(int id)
        {
            return _context.Scenarios.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateScenario(Scenario cmd)
        {

        }
    }
}