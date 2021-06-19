using System;
using System.Collections.Generic;
using System.Linq;
using Simulation.Models;

namespace Simulation.Data
{
    public class QuizRepo : IQuizRepo
    {
        private readonly SimulationContext _context;

        public QuizRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreateQuiz(Quiz cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Quiz.Add(cmd);
            SaveChanges();
        }

        public void DeleteQuiz(Quiz cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.Quiz.Remove(cmd);
            SaveChanges();
        }

        public IEnumerable<Quiz> GetAllQuiz()
        {
            return _context.Quiz.ToList();
        }

        public Quiz GetQuizById(int id)
        {
            return _context.Quiz.FirstOrDefault(p => p.Id == id);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdateQuiz(Quiz cmd)
        {

        }
    }
}