<script>
  let contacts = [
    {
      label: 'Call us:',
      url: 'tel:3143483365',
      text: '(314)348-3365'
    },
    {
      label: 'Sales:',
      url: 'tel:3143483365',
      text: '(314)348-3365'
    },
    {
      label: 'Support Portal:',
      url: '/',
      text: 'Click Here'
    }
  ];
  let footerMessage = 'Clarity Security Systems Unification Specialists are an elite firm of security system specialists. We design, engineer, install and program access control, video surveillance, intrusion detection and network and wireless systems for enterprise, commercial and residential clients.';
  let youtube = '#';
  let linkedin = '#';
</script>

<footer class="f f-theme-dark"> <!-- f-theme-dark: [/, /specialties, /contact]; f-theme-light: [/industries, /select-clients, /news] -->
  <span class="f-title">Let's talk Security</span>
  <!-- if route: [/, /specialties, /contact]; -->
  <img class="f-logo" src="images/c-on-dark.svg" alt="Clarity">
  <!-- if route: [/industries, /select-clients, /news] -->
  <!-- <img class="f-logo" src="images/c-on-light.svg" alt="Clarity"> -->
  <div class="f-contacts">
    {#each contacts as contact}
      <span class="f-contact">
        <b class="f-contact-label">{contact.label}</b>
        <a class="f-contact-link" href={contact.url}>{contact.text}</a>
      </span>
    {/each}
  </div>
  <nav class="f-nav">
    <a class="f-nav-item" href="/">Introduction</a>
    <a class="f-nav-item" href="/industries">Industries</a>
    <a class="f-nav-item" href="/select-clients">Select Clients</a>
    <a class="f-nav-item" href="/specialties">Specialties</a>
    <a class="f-nav-item" href="/news">News</a>
    <a class="f-nav-item" href="/contact">Contact</a>
  </nav>
  <p class="f-message">{footerMessage}</p>
  <p class="f-footer">Copyright Clarity SSU | <a class="f-footer-privacy" href="/">Privacy Policy</a> | Website built with ♥️ by <a class="f-footer-sharq" href="https://sharq.agency/" target="_blank">sharq</a></p>
  <div class="f-socials">
    <a class="f-social" href={linkedin} target="_blank">
      <svg class="f-social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.014 28.014">
        <path d="M26.013 0H1.995A2.01 2.01 0 0 0 0 2.02v23.974a2.01 2.01 0 0 0 1.995 2.02h24.018a2.015 2.015 0 0 0 2-2.02V2.02a2.015 2.015 0 0 0-2-2.02ZM8.467 24.012H4.315V10.643h4.158v13.369Zm-2.076-15.2A2.407 2.407 0 1 1 8.8 6.409a2.408 2.408 0 0 1-2.409 2.408Zm17.64 15.2h-4.152v-6.5c0-1.551-.031-3.546-2.157-3.546-2.164 0-2.495 1.688-2.495 3.433v6.616h-4.153V10.643h3.983v1.826h.056a4.373 4.373 0 0 1 3.933-2.157c4.2 0 4.984 2.77 4.984 6.372Z"/>
      </svg>      
    </a>
    <a class="f-social" href={youtube} target="_blank">
      <svg class="f-social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.15 24.012">
        <path d="M33.436 3.757A4.291 4.291 0 0 0 30.417.718C27.749 0 17.074 0 17.074 0S6.395 0 3.732.718A4.291 4.291 0 0 0 .713 3.757a45.014 45.014 0 0 0-.714 8.273 45.014 45.014 0 0 0 .714 8.27 4.227 4.227 0 0 0 3.019 2.99c2.663.718 13.342.718 13.342.718s10.679 0 13.342-.718a4.227 4.227 0 0 0 3.019-2.99 45.014 45.014 0 0 0 .714-8.27 45.014 45.014 0 0 0-.714-8.273ZM13.581 17.108V6.952l8.926 5.078-8.926 5.078Z"/>
      </svg>

    </a>
  </div>
</footer>

<style>
  .f-theme-dark {
    --f-fg: var(--c-light);
    --f-bg: var(--c-darker);
    --f-social: #ffffff;
  }
  .f-theme-light {
    --f-fg: var(--c-darker);
    --f-bg: var(--c-light);
    --f-social: #4ca4f8;
  }
  .f {
    padding: 1rem;
    color: var(--f-fg);
    background: var(--f-bg);
  }
  .f-title {
    display: block;
    text-align: center;
    font-family: var(--f-title);
    font-size: var(--s-xxl);
    margin: 1em 0 .5em;
  }
  .f-logo {
    display: block;
    font-size: var(--s-xxl);
    width: 1.25em;
    height: 1.25em;
    margin: .5em auto 1.25em;
  }
  .f-contacts {
    display: flex;
    justify-content: space-evenly;
    max-width: 70rem;
    padding: .75rem 1rem;
    margin: auto;
  }
  .f-contact {
    font-size: var(--s-m);
  }
  .f-contact-label {
    font-weight: bold;
  }
  .f-contact-link {
    color: inherit;
  }
  .f-contact-link:hover {
    color: var(--c-blue);
  }
  .f-nav {
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    padding: .75rem 1rem;
    margin: auto;
    font-size: var(--s-m);
  }
  .f-nav-item {
    color: inherit;
  }
  .f-nav-item:hover {
    color: var(--c-blue);
  }
  .f-message {
    padding: .75rem 1rem;
    max-width: 120ch;
    margin: 4rem auto 0;
    text-align: center;
  }
  .f-footer {
    padding: .75rem 1rem;
    max-width: 70rem;
    margin: auto;
    text-align: center;
  }
  .f-footer-privacy {
    color: inherit;
  }
  .f-footer-privacy:hover {
    color: var(--c-blue);
  }
  .f-footer-sharq {
    font-weight: bold;
    color: #FF0433;
  }
  .f-socials {
    text-align: center;
    padding: .5rem;
  }
  .f-social {
    display: inline-flex;
    padding: .25rem;
  }
  .f-social-img {
    display: inline-block;
    width: 2.25rem;
    height: 2rem;
    fill: var(--f-social);
  }
  @media (max-width: 750px) {
    .f-contacts {
      flex-direction: column;
      align-items: center;
    }
    .f-nav {
      flex-direction: column;
      align-items: center;
    }
  }
</style>