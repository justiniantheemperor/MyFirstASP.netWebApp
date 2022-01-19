using Microsoft.AspNetCore.Mvc;
using MyFirstASP.netWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASP.netWebApp.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult FanMail()
        {
            return View();
        }

        [HttpPost]
        public IActionResult FanMail(FanMailModel model) // called method overloading
        {
            return View();
        }
    }
}
