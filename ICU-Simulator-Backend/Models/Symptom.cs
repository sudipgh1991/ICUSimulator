using System.ComponentModel.DataAnnotations;

namespace Simulation.Models
{
    public class Symptom
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }
    }
}