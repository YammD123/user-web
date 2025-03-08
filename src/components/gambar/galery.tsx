"use client"


import React from 'react'
import { Image as ImageType } from '../../../types'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

interface GaleryProps {
    images: ImageType[]
}

export default function Galery({images}:GaleryProps) {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
        <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
            <TabList className={"grid grid-cols-4 gap-6"}>
                {images.map((image) => (
                    <Tab key={image.id} className={"relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"}>
                        {({ selected }) => (
                            
                        <div>
                            <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                                <Image
                                    fill
                                    src={image.url}
                                    alt={image.id}
                                    className='object-cover object-center'
                                />
                            </span>
                                <span className={selected?'absolute inset-0 rounded-md ring-2 ring-offset-2 ring-offset-sky-300 ring-white':''} />
                        </div>
                        )}
                    </Tab>
                ))}
            </TabList>
        </div>
        <TabPanels className={"aspect-square relative h-full w-full overflow-hidden sm:rounded-md"}>
            {images.map((image) => (
                <TabPanel key={image.id} >
                    <div className='aspect-square relative h-full w-full sm:rounded-md overflow-hidden'>
                        <Image
                            fill
                            src={image.url}
                            alt={image.id}
                            className='object-cover object-center'
                        />
                    </div>
                </TabPanel>
            ))}
        </TabPanels>
    </TabGroup>
  )
}
