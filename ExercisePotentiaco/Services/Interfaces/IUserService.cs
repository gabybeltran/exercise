using ExercisePotentiaco.Models;
using System.Collections.Generic;

namespace ExercisePotentiaco.Services.Interfaces
{
    public interface IUserService
    {
        public string GetSubordinates(List<User> users);
    }
}
