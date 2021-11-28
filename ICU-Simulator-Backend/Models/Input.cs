using System.ComponentModel.DataAnnotations;

namespace Simulation.Models
{
    public class Input
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
