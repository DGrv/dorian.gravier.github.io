(function ($) {
  $.widget('map2gpx.progress', {
    options: {
      progress: 0,
      total: 0,
      started: false,
      labelComputing: 'Calculs en cours...',
    },

    _create() {
      this.element.append(
        '<h2><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br/>'
          + `<strong><span class="data-computing-progress"></span> <small>- <span class="data-computing-status">${
            this.options.labelComputing
          }</span></small></strong>`
          + '<div class="data-computing-progressbar-container"><div class="data-computing-progressbar"></div></div></h2>',
      );

      this.$h2 = this.element.find('h2');
      this.$progress = this.element.find('.data-computing-progress');
      this.$progressbar = this.element.find('.data-computing-progressbar');
      this.$status = this.element.find('.data-computing-status');

      if (this.options.started) this.start();
    },

    _buildEventData() {
      return { started: this.options.started };
    },

    start() {
      if (!this.options.started) {
        // Reset
        this.options.progress = 0;
        this.options.total = 0;
        this.$status.text(this.options.labelComputing);
        this.$h2
          .find('i.fa.fa-3x')
          .removeClass('fa-bug')
          .addClass('fa-spinner')
          .addClass('fa-pulse');
      }

      this.options.started = true;
      this.update({ start: true, total: 0 });

      this._trigger('statechanged', null, this._buildEventData());
      this._trigger('started', null, {});
    },

    stop() {
      this.options.started = false;
      this.update({ end: true });

      this._trigger('statechanged', null, this._buildEventData());
      this._trigger('stopped', null, {});
    },

    started(started) {
      if (started === undefined) {
        return this.options.started;
      }

      if (started) this.start();
      else this.stop();
    },

    failed(error) {
      this.$status.text('Une erreur est survenue');
      this.$h2
        .find('i.fa.fa-3x')
        .addClass('fa-bug')
        .removeClass('fa-spinner')
        .removeClass('fa-pulse');
      $(`<div><small>${error.message}</small></div>`)
        .insertAfter(this.$h2)
        .fadeOut(10000, function () {
          $(this).remove();
        });
      this._trigger('failed', null, { error });
      this.options.started = false;
    },

    update(progress) {
      if (Array.isArray(progress)) {
        progress.forEach(i => this._update(i));
      } else {
        this._update(progress);
      }

      this._display();
    },

    _update(progress) {
      if (progress.start) {
        this.options.total += progress.total;
      } else if (progress.end) {
        this.options.progress = this.options.total;
      } else if (progress.count) {
        this.options.progress += progress.count;
      } else {
        this.options.progress++;
      }

      if ('step' in progress && progress.step) {
        $(`<div><small>${progress.step}</small></div>`)
          .insertAfter(this.$h2)
          .fadeOut(400, function () {
            $(this).remove();
          });
      }
    },

    _display() {
      let p = 0;
      if (this.options.total > 0) p = this.options.progress / this.options.total;

      this.$progress.text(`${Math.floor(p * 100)}%`);
      this.$progressbar.css('width', `${Math.floor(p * 100)}%`);

      if (Math.round(p * 100) == 42) {
        $("<div><small>La grande question sur la vie, l'univers et le reste répondue</small></div>")
          .insertAfter(this.$h2)
          .fadeOut(400, function () {
            $(this).remove();
          });
      }
    },
  });
}(jQuery));
