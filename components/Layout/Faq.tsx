import React, { useState } from "react";
import FaqItem from "./FaqItem";

const questions = [
  {
    id: "q1",
    text: "How do I pay for the essentials or premium plan?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae molestiae nobis iste libero eveniet nostrum voluptate aperiam praesentium et similique, fuga labore exercitationem, tempora dicta illum molestias consequatur. Voluptatibus.",
  },
  {
    id: "q2",
    text: "Can I cancel my essentials or premium plan subscription at my time?",
    answer:
      "You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle. You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
  },
  {
    id: "q3",
    text: "How do I pay for the essentials or premium plan?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae molestiae nobis iste libero eveniet nostrum voluptate aperiam praesentium et similique, fuga labore exercitationem, tempora dicta illum molestias consequatur. Voluptatibus.",
  },
  {
    id: "q4",
    text: "We need to add new users to our team, how will that be billed?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae molestiae nobis iste libero eveniet nostrum voluptate aperiam praesentium et similique, fuga labore exercitationem, tempora dicta illum molestias consequatur. Voluptatibus.",
  },
  {
    id: "q5",
    text: "How do I pay for the essentials or premium plan?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae molestiae nobis iste libero eveniet nostrum voluptate aperiam praesentium et similique, fuga labore exercitationem, tempora dicta illum molestias consequatur. Voluptatibus.",
  },
  {
    id: "q6",
    text: "Can I cancel my essentials or premium plan subscription at my time?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae molestiae nobis iste libero eveniet nostrum voluptate aperiam praesentium et similique, fuga labore exercitationem, tempora dicta illum molestias consequatur. Voluptatibus.",
  },
];

const Faq = () => {
  return (
    <div className="grid gap-y-12 mt-8">
      <h2 className="text-3xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <ul className="grid gap-y-2">
        {questions.map((question) => (
          <FaqItem
            key={question.id}
            id={question.id}
            text={question.text}
            answer={question.answer}
          />
        ))}
      </ul>
    </div>
  );
};

export default Faq;
