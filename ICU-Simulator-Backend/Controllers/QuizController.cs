using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Simulation.Data;
using Simulation.Models;

namespace Simulation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : Controller
    {
        private readonly IQuizRepo _repository;

        public QuizController(IQuizRepo repository)
        {
            _repository = repository;
        }

        [HttpGet("{Id}")]
        public ActionResult<Quiz> GetQuizById(int Id)
            => this.Ok(_repository.GetQuizById(Id));

        [HttpGet]
        public ActionResult<Quiz[]> GetQuiz()
            => this.Ok(_repository.GetAllQuiz());

        [HttpPost]
        public ActionResult<Quiz> AddQuiz([FromBody] Quiz quizProfile)
        {
            _repository.CreateQuiz(quizProfile);
            return this.Ok();
        }

        [HttpPut]
        public ActionResult<Quiz> EditQuiz([FromBody] Quiz quizProfile)
        {
            _repository.UpdateQuiz(quizProfile);
            return this.Ok();
        }

    }
}
