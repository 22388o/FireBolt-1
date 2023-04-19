<style>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<ion-tabs>
  <ion-tab tab="home">
    <ion-nav id="home-nav"></ion-nav>
    <div id="home-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Bitcoin</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Bitcoin</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="radio">
    <ion-nav id="radio-nav"></ion-nav>
    <div id="radio-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Lightning Network</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Lightning Network</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="library">
    <ion-nav id="library-nav"></ion-nav>
    <div id="library-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Backup</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Backup</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="search">
    <ion-nav id="search-nav"></ion-nav>
    <div id="search-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Nostr</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Search content</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon name="play-circle"></ion-icon>
      Listen Now
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon name="radio"></ion-icon>
      Radio
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon name="library"></ion-icon>
      Library
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon name="search"></ion-icon>
      Search
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>

<script>
  const homeNav = document.querySelector('#home-nav');
  const homePage = document.querySelector('#home-page');
  homeNav.root = homePage;

  const radioNav = document.querySelector('#radio-nav');
  const radioPage = document.querySelector('#radio-page');
  radioNav.root = radioPage;

  const libraryNav = document.querySelector('#library-nav');
  const libraryPage = document.querySelector('#library-page');
  libraryNav.root = libraryPage;

  const searchNav = document.querySelector('#search-nav');
  const searchPage = document.querySelector('#search-page');
  searchNav.root = searchPage;
</script>