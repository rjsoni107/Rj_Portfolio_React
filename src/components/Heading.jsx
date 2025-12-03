const Heading = ({ title, subtitle, headingClass }) => {
    return (
        <div className={`section-title text-center mb-8`}>
            <h2 className={`text-4xl font-bold mb-4 pb-4 relative inline-block ${headingClass ? headingClass : 'text-gray-800 dark:text-white '}`}>{title}</h2>
            <p className={`text-xl ${headingClass ? headingClass : 'text-gray-800 dark:text-white'}`}>{subtitle}</p>
        </div>
    )
}

export default Heading