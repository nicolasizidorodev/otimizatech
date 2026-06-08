const companies = [
  "Shopify", "HubSpot", "Stripe", "Slack", "AWS", "Notion",
  "Salesforce", "Intercom", "Zendesk", "Pipedrive", "RD Station", "Hotmart",
];

export default function Companies() {
  return (
    <section className="companies-section section-padding section-card">
      <div className="container">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Empresas que aceleram conosco</h2>
        </div>
        <div className="companies-list reveal fade-up">
          {companies.map((name) => (
            <div key={name} className="company-item">
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
