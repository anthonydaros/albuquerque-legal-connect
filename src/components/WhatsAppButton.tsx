import { Phone } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999479104"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
};