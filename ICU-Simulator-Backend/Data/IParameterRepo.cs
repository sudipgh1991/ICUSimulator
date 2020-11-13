using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface IParameterRepo
    {
        bool SaveChanges();
        IEnumerable<Parameter> GetAllParameters();
        Parameter GetParameterById(int id);
        void CreateParameter(Parameter cmd);
        void UpdateParameter(Parameter cmd);
        void DeleteParameter(Parameter cmd);
    }
}