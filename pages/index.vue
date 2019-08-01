<template>
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
      <img src="/svg/landing-page-illustration.svg">
    </div>
  </section>
</template>

<script>
export default {
  head: {
    meta: [
      { property: 'og:url', content: 'https://budgetjusticesa.org' },
      { property: 'og:title', content: 'Budget Justice SA Coming Soon' },
      { property: 'og:description', content: 'Budget Justice SA web site' },
      { property: 'og:site_name', content: 'Budget Justice SA' },
      { property: 'og:image', content: '/svg/landing-page-illustration.svg' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Budget Justice SA Coming Soon' },
      { name: 'twitter:description', content: 'Budget Justice SA web site' },
      { name: 'twitter:url', content: 'https://budgetjusticesa.org' },
      { name: 'twitter:image', content: 'https://budgetjusticesa.org' }
    ]
  }
}
</script>
