using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class InputRepo : IInputRepo
    {
        private readonly SimulationContext _context;

        public InputRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateInput(Input cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Inputs.Add(cmd);
        }

        public void DeleteInput(Input cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Inputs.Remove(cmd);
        }

        public IEnumerable<Input> GetAllInputs()
        {
            return _context.Inputs.ToList();
        }

        public Input GetInputById(int id)
        {
            return _context.Inputs.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateInput(Input cmd)
        {

        }
    }
}