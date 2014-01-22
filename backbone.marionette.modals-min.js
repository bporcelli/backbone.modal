(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}},c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};if("undefined"==typeof Backbone||null===Backbone)throw new Error("Backbone is not defined. Please include the latest version from http://documentcloud.github.com/backbone/backbone.js");Backbone.Marionette.Modals=function(c){function e(){return this.close=b(this.close,this),a=e.__super__.constructor.apply(this,arguments)}return d(e,c),e.prototype.modals=[],e.prototype.zIndex=0,e.prototype.show=function(a,b){var c,d,e,f,g,h;for(this.ensureEl(),this.modals.length>0&&(c=_.last(this.modals),c.modalEl.addClass(""+c.prefix+"-modal--stacked"),e=this.modals[this.modals.length-1],null!=e&&e.modalEl.removeClass(""+e.prefix+"-modal--stacked-reverse")),a.render(b),a.regionEnabled=!0,this.$el.show(),this.$el.append(a.el),this.modals.length>0&&a.$el.css({background:"none"}),Marionette.triggerMethod.call(a,"show"),Marionette.triggerMethod.call(this,"show",a),this.currentView=a,h=this.modals,f=0,g=h.length;g>f;f++)d=h[f],d.undelegateModalEvents();return a.on("modal:close",this.close),this.modals.push(a),this.zIndex++},e.prototype.close=function(){var a,b;return b=this.currentView,b&&!b.isClosed?(b.close?b.close():b.remove&&b.remove(),b.off("modal:close",this.close),this.modals.splice(_.indexOf(this.modals,b),1),this.zIndex--,this.currentView=this.modals[this.zIndex-1],a=_.last(this.modals),a&&(a.modalEl.addClass(""+a.prefix+"-modal--stacked-reverse"),_.delay(function(){return a.modalEl.removeClass(""+a.prefix+"-modal--stacked")},300),0!==this.zIndex&&a.delegateModalEvents()),Marionette.triggerMethod.call(b,"close"),Marionette.triggerMethod.call(this,"close",b)):void 0},e.prototype.closeAll=function(){var a,b,c,d,e;for(d=this.modals,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.close());return e},e}(Backbone.Marionette.Region)}).call(this);