import React from "react";
import styled from "styled-components";

const TestimonialsWrapper = styled.section`
  text-align: center;
  padding: 20px;
`;

const TestimonialItem = styled.div`
  margin-bottom: 20px;
`;

const TestimonialImage = styled.img`
  max-width: 80px;
  height: auto;
  border-radius: 50%;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

const TestimonialAuthor = styled.cite`
  font-size: 14px;
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      text: "I can't believe the positive impact on my financial situation! Your bank's tailored solutions transformed my financial outlook. Thank you for empowering me to achieve my goals.",
      author: "Jane Doe",
    },
    {
      text: "Echelon Trust Bank has truly exceeded my expectations. Their commitment to customer service is unparalleled. I feel confident and supported in every financial decision I make.",
      author: "John Smith",
    },
    {
      text: "From day one, your bank impressed me with its transparency and integrity. Your team's expertise helped me navigate complex financial choices, and I've reaped the rewards ever since.",
      author: "Samantha Brown",
    },
    {
      text: "The personalized attention I receive from Echelon Trust Bank is extraordinary. They took the time to understand my financial aspirations and provided strategies that align perfectly with my goals.",
      author: "Michael Johnson",
    },
    {
      text: "Choosing Echelon Trust Bank was a game-changer for me. The seamless digital experience combined with the human touch makes me feel valued as a client. I'm proud to be part of this community.",
      author: "Emily Taylor",
    },
  ];

  return (
    <TestimonialsWrapper>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialItem key={index}>
          <TestimonialImage alt={`Customer ${index + 1}`} />
          <TestimonialText>{testimonial.text}</TestimonialText>
          <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
        </TestimonialItem>
      ))}
    </TestimonialsWrapper>
  );
};

export default Testimonials;
