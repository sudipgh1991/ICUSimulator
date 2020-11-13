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
    public class ScenarioController : Controller
    {
        private readonly IScenarioRepo _repository;

        public ScenarioController(IScenarioRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Scenario>> GetAllScenarios()
        {
            var scenarios = _repository.GetAllScenarios();
            return Ok(scenarios);
        }
    }
}
