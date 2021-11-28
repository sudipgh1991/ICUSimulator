using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface IConditionRepo
    {
        bool SaveChanges();
        IEnumerable<Condition> GetAllConditions();
        Condition GetConditionById(int id);
        void CreateCondition(Condition cmd);
        void UpdateCondition(Condition cmd);
        void DeleteCondition(Condition cmd);
    }
}