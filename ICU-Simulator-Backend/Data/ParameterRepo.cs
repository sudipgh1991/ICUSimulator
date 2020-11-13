using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class ParameterRepo : IParameterRepo
    {
        private readonly SimulationContext _context;

        public ParameterRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateParameter(Parameter cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Parameters.Add(cmd);
        }

        public void DeleteParameter(Parameter cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Parameters.Remove(cmd);
        }

        public IEnumerable<Parameter> GetAllParameters()
        {
            return _context.Parameters.ToList();
        }

        public Parameter GetParameterById(int id)
        {
            return _context.Parameters.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateParameter(Parameter cmd)
        {

        }
    }
}