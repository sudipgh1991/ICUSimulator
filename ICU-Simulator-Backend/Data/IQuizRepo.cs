using System.Collections.Generic;
using Simulation.Models;

namespace Simulation.Data
{
    public interface IQuizRepo
    { 
        bool SaveChanges();
        IEnumerable<Quiz> GetAllQuiz();
        Quiz GetQuizById(int Id);
        void CreateQuiz(Quiz cmd);
        void UpdateQuiz(Quiz cmd);
        void DeleteQuiz(Quiz cmd);
    }
}