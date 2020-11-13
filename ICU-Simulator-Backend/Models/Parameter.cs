using System.ComponentModel.DataAnnotations;

namespace Simulation.Models
{
    public class Parameter
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int HeartRate { get; set; }
        [Required]
        public int BP_Sys { get; set; }
        [Required]
        public int BP_Dia { get; set; }
        [Required]
        public int SPO2 { get; set; }
        [Required]
        public string ETCO2 { get; set; }

    }
}
