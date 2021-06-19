using Simulation.Data;
using Simulation.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Simulation.Data
{
    public class PatientProfileRepo : IPatientProfileRepo
    {
        private readonly SimulationContext _context;

        public PatientProfileRepo(SimulationContext context)
        {
            _context = context;
        }

        public void CreatePatientProfile(PatientProfile cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.PatientProfiles.Add(cmd);
            SaveChanges();
        }

        public void DeletePatientProfile(PatientProfile cmd)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException(nameof(cmd));
            }
            _context.PatientProfiles.Remove(cmd);
        }

        public IEnumerable<PatientProfile> GetAllPatientProfiles()
        {
            return _context.PatientProfiles.ToList();
        }

        public PatientProfile GetPatientProfileById(int caseStudyId)
        {
            return _context.PatientProfiles.FirstOrDefault(p => p.CaseStudyId == caseStudyId);
        }

        public bool SaveChanges()
        {
            return _context.SaveChanges() >= 0;
        }

        public void UpdatePatientProfile(PatientProfile cmd)
        {
            _context.PatientProfiles.Update(cmd);
            SaveChanges();
        }
    }
}
