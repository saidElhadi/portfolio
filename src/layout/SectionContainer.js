const PageHeading = ({ pageIcon, pageTitle }) => {
  return (
    <div className="page-heading">
      <span className="icon">
        <i className={pageIcon} />
      </span>
      <h2>{pageTitle}</h2>
    </div>
  );
};

const SectionContainer = ({ children, pageTitle, pageIcon, pageId, map }) => {
  return (
    <section className={`${pageId}-section pt-page  `} id={pageId}>
      <div className="section-container">
        {/*Page Heading*/}
        <PageHeading pageIcon={pageIcon} pageTitle={pageTitle} />
        {children}
      </div>
      {map && (
        <div className="google">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18329.042478485542!2d113.52331503868417!3d34.823979417302695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1675250757137!5m2!1sen!2s"
            width="100%"
            height={200}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </section>
  );
};
export default SectionContainer;
