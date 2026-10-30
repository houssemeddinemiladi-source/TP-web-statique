import React from 'react'
const images =[
  "https://instagram.ftun20-1.fna.fbcdn.net/v/t51.82787-19/790268006_18091383149536638_6474243417845185963_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=_NAgEsTYYZoQ7kNvwFuRk5O&_nc_oc=AdqwrqkZDXdYXWNfXpByo1GVhDxtNygam_PwzSK_ZA_3WZSZlsGSc3MyJJTqi4rpKpvrEtO4SCuDETY92mUl35p1&_nc_zt=24&_nc_ht=instagram.ftun20-1.fna&_nc_gid=2EEcooRBpFBp0Wz7JdOndw&_nc_ss=786a8&oh=00_AQQez9QFvHNuY_UiqL8lsc1m7mirXzkMSvd_H1VBCPIfzw&oe=6AEA595F",
  "https://instagram.ftun20-1.fna.fbcdn.net/v/t51.2885-19/473656560_1235870147476106_3317900596335250371_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=O5x8XSdnol4Q7kNvwEYUk_k&_nc_oc=AdpoBUqMaefBNDQ7nmbCXW0sLnvr9YmmnlUtvnyl6tq530kyzOj-7NwYQCda1ZImeTchiel1-b347dqk6OmfcGOl&_nc_zt=24&_nc_ht=instagram.ftun20-1.fna&_nc_ss=786a8&oh=00_AQSEpszaQnwRFnLwSn6CB3btlmN3SN54WgSLgJyt-bvGIA&oe=6AEA42E0",
  "https://instagram.ftun20-1.fna.fbcdn.net/v/t51.82787-19/842422309_18126391340309036_4246529585151252349_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy43MTAuQzMifQ%3D%3D&_nc_ohc=z7F9OAs4PhEQ7kNvwE7ehyy&_nc_oc=Adqjn_LsYxF4pcPy1l96IeildLedI8MntyUADcPYFoSiAo5olIoxCGGX45ClEdaj5GucNbFGTUGgPMnw77-0hdHC&_nc_zt=24&_nc_ht=instagram.ftun20-1.fna&_nc_gid=Hpss-lJJ59BRLUuA9_mpAQ&_nc_ss=786a8&oh=00_AQTAVKqXZ-5Ls53GdurkN6Yvh4JTwu4z2nsr-U1wGJhFbw&oe=6AEA5AE8",
];

function HeroSection() {
  return (
    <section id='home' className='app-container pt-25 pb-12 overflow-hidden sm:overflow-visible'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* left content */}
        <div>
          <div class=" mb-5 inline-flex items-center px-2.5 py-1 rounded-full bg-orange-100/60 text-orange-600 font-semibold text-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_2px_4px_rgba(249,115,22,0.1)] backdrop-blur-sm border border-orange-200/50">
          Learn <span class="mx-1.5 opacity-60">•</span> Share <span class="mx-1.5 opacity-60">•</span> Grow
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            <span>Your skills are</span>
            <br />
            <span>worth <span className='gradient-text'>sharing .</span></span>
          </h1>
          <p className='text-lg text-gray-600 max-w-lg'>
            Learn Something new. Teach what you know. 
            Exchange knowledge with people who share your curiosity.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <a className='btn-primary'>Find your match 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inline ml-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a className='btn-outline'>Learn more</a>
          </div>          
          <div className='pt-4 flex items-center space-x-4 ml-4'>
            <div className="flex -space-x-2">
              {images.map((img, i)=>(
                <img 
                key={i}
                className='avatar'
                src={img}
                alt={`user ${i+1}`}/>
              ))}
            </div>

            <p className='text-sm font-medium text-gray-600'>
              Trusted By {" "}
              <span className='text-primary font-bold'>+1,000</span> people worldwide
            </p>
          </div>

        </div>
        {/* right image */}
         <div className="relative w-full h-100">
          <img 
          src="https://scontent.ftun20-1.fna.fbcdn.net/v/t1.15752-9/870762076_1491962866144614_856416470221536802_n.png?stp=dst-png_s960x960&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ZPL8nHiDg3AQ7kNvwEMehqS&_nc_oc=AdpoTeF13NFgSWzIecOhbn9z6iKExl8orQyEU9Q6U45WI_tsVsdeBo0YP_mCMBdCXBfULCu-V97Cbpeew1nKwHQZ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.ftun20-1.fna&_nc_ss=7f22e&oh=03_Q7cD6wHHrTJv4BhCtwhpUclFaEEWulvYpVi-_nyvSmVwUpw00g&oe=6B0BE494"
          className="w-full h-full object-cover rounded-2xl"
          alt='hero section' />
          <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
