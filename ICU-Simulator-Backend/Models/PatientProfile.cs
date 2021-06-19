using System;
using System.ComponentModel.DataAnnotations;

namespace Simulation.Models
{
    public class PatientProfile
    {
        public int CaseStudyId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        [Key]
        public string Email { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }
        public string BloodType { get; set; }
        public string Allergies { get; set; }
        public string Disease { get; set; }
        public string Condition { get; set; }
        public DateTime LastVisit { get; set; } = DateTime.Now;
        public string Symptoms { get; set; }
    }
}
