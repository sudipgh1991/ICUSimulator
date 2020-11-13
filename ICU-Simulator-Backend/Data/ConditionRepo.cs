using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class ConditionRepo : IConditionRepo
    {
        private readonly SimulationContext _context;

        public ConditionRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateCondition(Condition cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Conditions.Add(cmd);
        }

        public void DeleteCondition(Condition cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Conditions.Remove(cmd);
        }

        public IEnumerable<Condition> GetAllConditions()
        {
            return _context.Conditions.ToList();
        }

        public Condition GetConditionById(int id)
        {
            return _context.Conditions.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateCondition(Condition cmd)
        {

        }
    }
}