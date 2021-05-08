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
    public class CaseStudiesController : Controller
    {
        private readonly IScenarioRepo _repository;

        public CaseStudiesController(IScenarioRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Scenario>> GetAllScenarios()
            => this.Ok(_repository.GetAllScenarios());
    }
}
