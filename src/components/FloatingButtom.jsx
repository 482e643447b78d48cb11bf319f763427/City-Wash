import { Phone, MessageCircle } from 'lucide-react';

function FloatingButton(){
    return(
        <>
            <div className="fixed left-3 sm:left-8 bottom-1/10 sm:bottom-1/5 transform -translate-y-1/2 z-20">
          <button className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 mb-4">
            <Phone className="w-5 h-6 sm:w-6 sm:h-6  text-white" />
          </button>
        </div>

        <div className="fixed right-3 sm:right-8 bottom-1/10 sm:bottom-1/5 transform -translate-y-1/2 z-20">
          <button className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 mb-4">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6  text-white" />
          </button>
        </div>

        </>
    )
}
export default FloatingButton;