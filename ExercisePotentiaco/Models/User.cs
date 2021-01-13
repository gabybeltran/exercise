using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExercisePotentiaco.Models
{
    public class User
    {
        public int id { get; set; }
        public Nullable<int> manager_id { get; set; }
        public string name { get; set; }
        public decimal hour_worked { get; set; }
        public decimal hourly_wage { get; set; }
    }
}
