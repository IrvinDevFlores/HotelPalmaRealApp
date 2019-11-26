using HotelPalmaReal.HotelData.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HotelPalmaReal.HotelData
{
    public class HotelContext : DbContext
    {
        public HotelContext(DbContextOptions<HotelContext> options)
        : base(options)
        { }

        /*With offitial entityframework
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseMySql("server=localhost;database=library;user=user;password=password");
        }*/

        public DbSet<Reservacion> Reservations { get; set; }
    }
}
