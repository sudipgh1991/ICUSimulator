using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Simulation.Models
{
    public class Parameter
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public int HeartRate { get; set; }
        [Required]
        public int BP_Sys { get; set; }
        [Required]
        public int BP_Dia { get; set; }
        [Required]
        public int SPO2 { get; set; }
        public int Pulse { get; set; }
        public int BP_Auto_Sys { get; set; }
        public int BP_Auto_Dia { get; set; }
        public int AwRR { get; set; }
        public int Tblood { get; set; }
        public string UserType { get; set; }
    }
}
