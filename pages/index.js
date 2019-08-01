const html = require('html-template-tag');

const page = () => html`
  <section class="coming-soon-grid">
    <div>
      <h1 class="coming-soon-header">
        Budget Justice SA
      </h1>
      <h2>Our new web site is on its way.</h2>
      <p>Sign up to be notified when we launch.</p>

      <form>
        <fieldset>
          <p>
            <a href="http://eepurl.com/gv5uz9" type="submit" class="button button-large-cta">Notify me</a>
          </p>
        </fieldset>
      </form>
    </div>
    <div>
      <img src="/public/svg/landing-page-illustration.svg">
    </div>
  </section>
`;

module.exports = {
  layout: 'default',
  title: 'Budget Justice SA Coming Soon',
  page,
};