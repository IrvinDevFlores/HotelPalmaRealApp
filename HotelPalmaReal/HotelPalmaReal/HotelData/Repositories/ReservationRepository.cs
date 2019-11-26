using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotelPalmaReal.HotelData.Entities;

namespace HotelPalmaReal.HotelData.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        HotelContext _context;
        public ReservationRepository(HotelContext context)
        {
            _context = context;
        }

        public IEnumerable<Reservacion> GetAll()
        {
            return _context.Reservations.ToList();
        }

        public void Add(Reservacion entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(Reservacion entity)
        {
            throw new NotImplementedException();
        }

        public Reservacion FindById(int Id)
        {
            throw new NotImplementedException();
        }

        public void Update(Reservacion entity)
        {
            throw new NotImplementedException();
        }
    }
}
