import Link from 'next/link';
import React from 'react';

interface Props {
}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div className='flex justify-between items-center px-8 py-8 bg-blue-100'>
      <a className='font-bold' href="/"><img src="/logo.svg" className='w-28'/></a>
      <ul className='flex gap-4'>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;