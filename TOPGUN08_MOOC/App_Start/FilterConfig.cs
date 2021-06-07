using System.Web;
using System.Web.Mvc;

namespace TOPGUN08_MOOC
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
