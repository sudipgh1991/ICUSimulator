using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface IInputRepo
    {
        bool SaveChanges();
        IEnumerable<Input> GetAllInputs();
        Input GetInputById(int id);
        void CreateInput(Input cmd);
        void UpdateInput(Input cmd);
        void DeleteInput(Input cmd);
    }
}