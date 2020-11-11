using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface IScenarioRepo
    {
        bool SaveChanges();
        IEnumerable<Scenario> GetAllScenarios();
        Scenario GetScenarioById(int id);
        void CreateScenario(Scenario cmd);
        void UpdateScenario(Scenario cmd);
        void DeleteScenario(Scenario cmd);
    }
}