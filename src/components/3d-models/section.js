const Section = ({ children, className = "", id = "" }) => (
    <section
        id={id}
        className={`${className} w-full flex justify-center items-center`}
    >
        <div
            className="max-w-[1200px] w-full px-6 lg:px-8 xl:px-0"
        >
            {children}
        </div>
    </section>
);

export default Section;
