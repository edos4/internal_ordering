class StickyNavigation {
  constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $('.stickyhero-tab').click(function () {
          self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
          this.onScroll();
      });
      $(window).resize(() => {
          this.onResize();
      });
  }
  onTabClick(event, element) {
      event.preventDefault();
      let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
      $('html, body').animate({ scrollTop: scrollTop }, 600);
  }
  onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
  }
  onResize() {
      if (this.currentId) {
          this.setSliderCss();
      }
  }
  checkTabContainerPosition() {
      let offset = $('.stickyhero-tabs').offset().top + $('.stickyhero-tabs').height() - this.tabContainerHeight;
      if ($(window).scrollTop() > offset) {
          $('.stickyhero-tabs-container').addClass('stickyhero-tabs-container--top');
      } else {
          $('.stickyhero-tabs-container').removeClass('stickyhero-tabs-container--top');
      }
      console.log("Triggered: "+offset);
  }
  findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $('.stickyhero-tab').each(function () {
          let id = $(this).attr('href');
          let offsetTop = $(id).offset().top - self.tabContainerHeight;
          let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
          if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
              newCurrentId = id;
              newCurrentTab = $(this);
          }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
      }
      console.log("currentID: "+this.currentID+" currentTab "+this.currentTab);
  }
  setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
          width = this.currentTab.css('width');
          left = this.currentTab.offset().left;
      }
      $('.stickyhero-tab-slider').css('width', width);
      $('.stickyhero-tab-slider').css('left', left);
  }
}
new StickyNavigation();