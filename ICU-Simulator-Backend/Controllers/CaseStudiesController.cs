using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
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
        private readonly IScenarioRepo _scenarioRepository;
        private readonly IConditionRepo _conditionRepository;
        private readonly ISymptomRepo _symptomsRepository;

        public CaseStudiesController(
            IScenarioRepo repository,
            IConditionRepo conditionRepository,
            ISymptomRepo symptomsRepository)
        {
            _scenarioRepository = repository;
            _conditionRepository = conditionRepository;
            _symptomsRepository = symptomsRepository;
        }

        [HttpGet("scenarios")]
        public ActionResult<IEnumerable<Scenario>> GetAllScenarios()
            => this.Ok(_scenarioRepository.GetAllScenarios());

        [HttpGet("conditions")]
        public ActionResult<IEnumerable<Condition>> GetAllConditions()
            => this.Ok(_conditionRepository.GetAllConditions());

        [HttpGet("symptoms")]
        public ActionResult<IEnumerable<Symptom>> GetAllSymptoms()
            => this.Ok(_symptomsRepository.GetAllSymptoms());

        
        [HttpPost("AddScenario")]
        public async Task<ActionResult<Scenario>> AddScenario([FromBody] Scenario scenario)
        {
            await Task.Run(() =>
            {
                _scenarioRepository.CreateScenario(scenario);
                _scenarioRepository.SaveChanges();
            });
            return CreatedAtAction("AddScenario", scenario);
        }
         
    }
}
