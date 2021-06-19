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
    public class PatientProfileController : Controller
    {
        private readonly IPatientProfileRepo _repository;

        public PatientProfileController(IPatientProfileRepo repository)
        {
            _repository = repository;
        }

        [HttpGet("{caseStudyId}")]
        public ActionResult<PatientProfile> GetPatientProfileById(int caseStudyId)
            => this.Ok(_repository.GetPatientProfileById(caseStudyId));

        [HttpPost]
        public ActionResult<PatientProfile> AddProfile([FromBody] PatientProfile patientProfile)
        {
            _repository.CreatePatientProfile(patientProfile);
            return this.Ok();
        }

        [HttpPut]
        public ActionResult<PatientProfile> EditProfile([FromBody] PatientProfile patientProfile)
        {
            _repository.UpdatePatientProfile(patientProfile);
            return this.Ok();
        }

    }
}
