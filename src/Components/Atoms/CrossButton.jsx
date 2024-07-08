import React from 'react'
import { motion } from 'framer-motion'

 const CrossButton = ({ onClick, disabled, type, className, ariaLabel, cross }) => {
	return (
		<button
			aria-label={ariaLabel}
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`block w-[24px] h-[24px] border
                        border-gray-300 
                        text-gray-300  
                        rounded-full ml-5
                        focus:outline-none focus:outline-offset-2 focus:outline-2 focus:outline-accent focus:border-accent focus:text-accent enabled:hover:border-accent enabled:hover:text-accent
                        focus:border-accent focus:text-accent 
                        transition-all duration-500 hover:duration-200 focus:duration-200 
                        ${!disabled && 'cursor-pointer'}
                        ${className}
                        `}
		>
			<motion.span
				initial={{
					rotate: cross ? '-45deg' : '-90deg',
					scale: 1,
				}}
				animate={{
					rotate: cross ? '45deg' : '0deg',
					scale: 1,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}}
				whileHover={{
					rotate: !disabled ? (cross ? '135deg' : '90deg') : cross ? '45deg' : '0deg',
					scale: !disabled ? 1.3 : 1,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}}
				className='block w-full h-full rounded-full hover:border-accent'
			>
				<div className='text-3xl font-medium leading-[21px] align-middle text-center'>+</div>
			</motion.span>
		</button>
	)
}

export default CrossButton;