using Simulation.Models;
using System.Collections.Generic;


namespace Simulation.Data
{
    public interface IPatientProfileRepo
    {
        bool SaveChanges();
        IEnumerable<PatientProfile> GetAllPatientProfiles();
        PatientProfile GetPatientProfileById(int caseStudyId);
        void CreatePatientProfile(PatientProfile cmd);
        void UpdatePatientProfile(PatientProfile cmd);
        void DeletePatientProfile(PatientProfile cmd);
    }
}
