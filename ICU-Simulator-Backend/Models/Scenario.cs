using System.ComponentModel.DataAnnotations;

namespace Simulation.Models
{
    public class Scenario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string ConditionId { get; set; }
        [Required]
        public string SymptomId { get; set; }
        [Required]
        public string MeasureId { get; set; }
        [Required]
        public string Type { get; set; }
        public string BriefDescription { get; set; }
        public string DetailedDescription { get; set; }
    }
}