
import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Bishal's innovative approach to applying physics principles in cancer treatment has opened new avenues for our research department. His work is not just academically sound but has real-world implications for patient care.",
      name: "Dr. Sarah Johnson",
      title: "Research Director, Medical Physics Institute",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "Working with Bishal on the quantum imaging project was truly inspiring. His ability to bridge complex theoretical physics with practical medical applications is remarkable. A bright mind with exceptional potential.",
      name: "Prof. Michael Chen",
      title: "Professor of Biophysics, University of Science",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      quote: "I've had the pleasure of mentoring Bishal during his undergraduate studies. His dedication, curiosity, and innovative thinking set him apart. His recent work in radiation therapy optimization shows tremendous promise.",
      name: "Dr. Robert Patel",
      title: "Senior Physicist, National Laboratory",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-12 text-center">What Colleagues Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md relative card-hover"
            >
              <div className="mb-8">
                <svg
                  className="absolute top-6 left-6 w-12 h-12 text-theme-purple opacity-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
                </svg>
                <p className="text-slate-700 italic relative z-10">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-theme-navy">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
