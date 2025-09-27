
import ServiceCard from "../components/ServiceCard";

function Service(){
    const services = [
        { title: "Wash & Iron" },
        { title: "Monthly Orders" },
        { title: "Pickup & Delivery" },
        { title: "Steam Ironing" },
        { title: "Dry Cleaning" },
        { title: "Blanket & Curtain Cleaning" },
        ];
    
    return(

        
        <>
            
            
            <div className="min-h-[650px] bg-orange-400 py-10 px-4 sm:px-8 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} />
                    ))}
                </div>
            </div>
            

        </>
    )
}

export default Service