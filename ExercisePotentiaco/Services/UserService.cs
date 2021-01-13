using ExercisePotentiaco.Services.Interfaces;
using System.Collections.Generic;
using ExercisePotentiaco.Models;
using System.Linq;
using System.Text.Json;
using System.Collections;

namespace ExercisePotentiaco.Services
{
    public class UserService : IUserService
    {
        public string GetSubordinates(List<User> users)
        {
            var list = users.Select(x => new
            {
                Name = x.name,
                UserId = x.id,
                ManagerId = x.manager_id,
                WorkedHours = x.hourly_wage * x.hour_worked
            });

            var listSub = list.Select(x => new
            {
                x.Name,
                TotalSubordinates = x.WorkedHours + list.Where(w => w.ManagerId == x.UserId).Sum(s => s.WorkedHours)
            });

            var jsonResult = JsonSerializer.Serialize(listSub).ToString();
            return jsonResult;
        }
    }
}
