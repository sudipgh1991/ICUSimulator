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
        public string Description { get; set; }
    }
}