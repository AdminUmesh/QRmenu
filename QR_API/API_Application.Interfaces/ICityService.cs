using API_Application.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API_Application.Interfaces
{
    public interface ICityService
    {
        Task<List<City>> GetAllAsync();
        Task<City?> GetByCodeAsync(string code);
        Task<City> AddAsync(City city);
        Task<bool> UpdateAsync(string code, City city);
        Task<bool> DeleteAsync(string code);
    }
}
