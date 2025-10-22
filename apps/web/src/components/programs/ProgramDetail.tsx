'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type ProgramDetailProps = {
  title: string
  description: string
  details: {
    eligibility?: string[]
    benefits?: string[]
    process?: string[]
  }
}

export default function ProgramDetail({ title, description, details }: ProgramDetailProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white overflow-hidden rounded-lg shadow">
      <div className="p-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <ChevronDownIcon 
            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        
        <Transition
          show={isOpen}
          enter="transition-all duration-300 ease-out"
          enterFrom="opacity-0 max-h-0"
          enterTo="opacity-100 max-h-[500px]"
          leave="transition-all duration-200 ease-in"
          leaveFrom="opacity-100 max-h-[500px]"
          leaveTo="opacity-0 max-h-0"

        >
          <div className="mt-4 space-y-4">
            {details.eligibility && (
              <div>
                <h4 className="font-medium text-gray-900">Eligibility</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                  {details.eligibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {details.benefits && (
              <div>
                <h4 className="font-medium text-gray-900">Benefits</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                  {details.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.process && (
              <div>
                <h4 className="font-medium text-gray-900">Application Process</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                  {details.process.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Transition>
      </div>
    </div>
  )
}