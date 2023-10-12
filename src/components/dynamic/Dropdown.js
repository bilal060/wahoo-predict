"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import CustomButton from './CustomButton';

const Dropdown = ({ btnTitle, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <div className="relative">
                <CustomButton onClick={() => setIsOpen(prev => !prev)}>
                    {btnTitle}
                    <MdArrowDropDown />
                </CustomButton>

                {isOpen && <div className={`absolute top-10 right-0 z-30 w-[200px] min-h-auto flex flex-col py-4 bg-gray-800 rounded-md`}>
                    {
                        items.map((item, index) =>
                            <Link
                                prefetch
                                key={index}
                                className="hover:bg-gray-950 hover:text-white-500 px-4 py-1"
                                href={item?.route || ''}
                                onClick={() => setIsOpen(prev => !prev)}
                            >{item.title}</Link>
                        )
                    }
                </div>}
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={() => setIsOpen(prev => !prev)}
                    ></div>
                    :
                    <></>
            }
        </React.Fragment>
    )
}

export default Dropdown;