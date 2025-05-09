'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Accordian = () => {
  const [openSection, setOpenSection] = useState(null)
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
    setOpenFAQ(null) // Close any open FAQ when switching section
  }

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqList = [
    {
      question: 'What services do you offer?',
      answer: 'We provide tiles, sanitary ware, furniture, and custom interior solutions.'
    },
    {
      question: 'Do you serve pan-India?',
      answer: 'Yes, we serve clients nationwide.'
    },
    {
      question: 'Can we request custom designs?',
      answer: 'Absolutely! We specialize in tailoring solutions to client needs.'
    }
  ]

  const accordionData = [
    {
      title: 'About the Company',
      content: [
        `Our company is a leader in delivering top-notch solutions in construction, décor, and furnishings. We are dedicated to innovation and client satisfaction.`,
        `Our company is a leader in delivering top-notch solutions in construction, décor, and furnishings. We are dedicated to innovation and client satisfaction.`
      ]
    },
    {
      title: 'Our History',
      content: [
        `Founded in 2010, we've grown from a small startup into a major player in the industry with clients across multiple sectors.`,
        `Founded in 2010, we've grown from a small startup into a major player in the industry with clients across multiple sectors.`
      ]
    },
    {
      title: 'Frequently Asked Questions',
      content: (
        <div>
          {faqList.map((faq, index) => (
            <div
              key={index}
              className={`py-2 ${index !== faqList.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-gray-50"
              >
                {faq.question}
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-200 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <div className="bg-gray-700 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-gray-600 p-6 rounded-xl shadow-lg">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`${index !== accordionData.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between text-white items-center py-4 text-left text-lg font-semibold"
            >
              {item.title}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openSection === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openSection === index && (
              <div className="pb-4 text-gray-100 text-base">
                {Array.isArray(item.content)
                  ? item.content.map((para, i) => (
                      <p key={i} className="mb-2">
                        {para}
                      </p>
                    ))
                  : item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accordian
