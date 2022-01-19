using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASP.netWebApp.Models
{
    public class FanMailModel
    {
        [EmailAddress]
        public string From { get; set; } // adding { get; set; } adds your getter and setter (same as commented code below)
        public string Subject { get; set; }
        [Required][MaxLength(25)]
        public string Message { get; set; }

        ////From setter
        //public void setFrom (string input)
        //{
        //    this.From = input;
        //}
        ////Getter
        //public string getFrom()
        //{
        //    return this.From;
        //}
    }
}

