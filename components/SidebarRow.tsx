import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='group max-w-fit flex items-center rounded-full space-x-2 px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200'>
        <Icon className='h-6 w-6' />
        <p className='hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow