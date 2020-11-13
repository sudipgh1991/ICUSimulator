using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface ISymptomRepo
    {
        bool SaveChanges();
        IEnumerable<Symptom> GetAllSymptoms();
        Symptom GetSymptomById(int id);
        void CreateSymptom(Symptom cmd);
        void UpdateSymptom(Symptom cmd);
        void DeleteSymptom(Symptom cmd);
    }
}