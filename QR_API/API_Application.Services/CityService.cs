using API_Application.Interfaces;
using API_Application.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Application.Services
{
    public class CityService : ICityService
    {
        // In-memory list for testing
        private static readonly List<City> _cities = new List<City>
        {
            new City { Id = 1, Code = "DEL", Name = "New Delhi" },
            new City { Id = 2, Code = "MUM", Name = "Mumbai" }
        };

        public Task<List<City>> GetAllAsync()
        {
            // Just return the list
            return Task.FromResult(_cities.ToList());
        }

        public Task<City?> GetByCodeAsync(string code)
        {
            var city = _cities.FirstOrDefault(c => c.Code == code);
            return Task.FromResult(city);
        }

        public Task<City> AddAsync(City city)
        {
            // Simple id generation for testing
            city.Id = _cities.Count == 0 ? 1 : _cities.Max(c => c.Id) + 1;
            _cities.Add(city);
            return Task.FromResult(city);
        }

        public Task<bool> UpdateAsync(string code, City city)
        {
            var existing = _cities.FirstOrDefault(c => c.Code == code);
            if (existing == null)
                return Task.FromResult(false);

            existing.Name = city.Name;
            existing.Code = city.Code;
            return Task.FromResult(true);
        }

        public Task<bool> DeleteAsync(string code)
        {
            var existing = _cities.FirstOrDefault(c => c.Code == code);
            if (existing == null)
                return Task.FromResult(false);

            _cities.Remove(existing);
            return Task.FromResult(true);
        }
    }
}
