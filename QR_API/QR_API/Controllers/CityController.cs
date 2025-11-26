using Microsoft.AspNetCore.Mvc;
using API_Application.Interfaces;
using API_Application.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace QR_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly ICityService _cityService;

        // Inject interface (not concrete CityService)
        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        // GET api/city
        [HttpGet]
        public async Task<ActionResult<List<City>>> GetAll()
        {
            var cities = await _cityService.GetAllAsync();
            return Ok(cities);
        }

        // GET api/city/DEL
        [HttpGet("{code}")]
        public async Task<ActionResult<City>> GetByCode(string code)
        {
            var city = await _cityService.GetByCodeAsync(code);
            if (city == null)
                return NotFound();

            return Ok(city);
        }

        // POST api/city
        [HttpPost]
        public async Task<ActionResult<City>> Create([FromBody] City city)
        {
            var created = await _cityService.AddAsync(city);
            return CreatedAtAction(nameof(GetByCode), new { code = created.Code }, created);
        }

        // PUT api/city/DEL
        [HttpPut("{code}")]
        public async Task<IActionResult> Update(string code, [FromBody] City city)
        {
            var success = await _cityService.UpdateAsync(code, city);
            if (!success)
                return NotFound();

            return NoContent();
        }

        // DELETE api/city/DEL
        [HttpDelete("{code}")]
        public async Task<IActionResult> Delete(string code)
        {
            var success = await _cityService.DeleteAsync(code);
            if (!success)
                return NotFound();

            return NoContent();
        }
    }

}
