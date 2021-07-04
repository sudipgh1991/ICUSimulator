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
    public class SimulationScreenController : Controller
    {
        private readonly IParameterRepo _repository;

        public SimulationScreenController(IParameterRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Parameter>> GetParameters()
            => this.Ok(_repository.GetAllParameters());

        [HttpPut]
        public ActionResult UpdateParam([FromBody] Parameter paramater)
        {
            _repository.UpdateParameter(paramater);
            return this.Ok();
        }

        [HttpGet("keepAlive")]
        public ActionResult KeepAlive()
            => this.Ok();
        
    }
}
