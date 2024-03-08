import { MetadataRoute } from "next";
import { NavLinkss } from "@/constants";
export default  function sitemap() 
{
    const siteentries:MetadataRoute.Sitemap = NavLinkss.map((nav)=>(
        {
            url:`https://aanm-vvrsr.vercel.app${nav.route}`
        }
    ))
   return [
    {
      url: 'https://aanm-vvrsr.vercel.app/about',
      lastModified: new Date()
    },
    ...siteentries
   ]    
}