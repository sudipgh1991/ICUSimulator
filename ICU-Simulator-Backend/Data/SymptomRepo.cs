using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class SymptomRepo : ISymptomRepo
    {
        private readonly SimulationContext _context;

        public SymptomRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateSymptom(Symptom cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Symptoms.Add(cmd);
        }

        public void DeleteSymptom(Symptom cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Symptoms.Remove(cmd);
        }

        public IEnumerable<Symptom> GetAllSymptoms()
        {
            return _context.Symptoms.ToList();
        }

        public Symptom GetSymptomById(int id)
        {
            return _context.Symptoms.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateSymptom(Symptom cmd)
        {

        }
    }
}