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
      image: "testimonial-image-1.jpg",
      text: "I can't believe the positive impact on my financial situation!",
      author: "Jane Doe",
    },
    // Add more testimonial objects
  ];

  return (
    <TestimonialsWrapper>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialItem key={index}>
          <TestimonialImage
            src={testimonial.image}
            alt={`Customer ${index + 1}`}
          />
          <TestimonialText>{testimonial.text}</TestimonialText>
          <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
        </TestimonialItem>
      ))}
    </TestimonialsWrapper>
  );
};

export default Testimonials;
