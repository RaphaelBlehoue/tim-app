var App = (function() {
  var a = function() {
      $("body").addClass("no-transitions");
    },
    b = function() {
      $("body").removeClass("no-transitions");
    },
    c = function() {
      var A = function() {
        $(".sidebar-main")
          .find(".nav-sidebar")
          .children(".nav-item-submenu")
          .hover(function() {
            var B = 0,
              C = $(this),
              D = "nav-group-sub",
              E = "nav-item-submenu-reversed";
            (B += C.find("." + D)
              .filter(":visible")
              .outerHeight()),
              C.children("." + D).length &&
                (C.children("." + D).offset().top +
                  C.find("." + D)
                    .filter(":visible")
                    .outerHeight() >
                document.body.clientHeight
                  ? C.addClass(E)
                  : C.removeClass(E));
          });
      };
      $("body").hasClass("sidebar-xs") && A(),
        $(".sidebar-main-toggle").on("click", function(B) {
          B.preventDefault(),
            $("body")
              .toggleClass("sidebar-xs")
              .removeClass("sidebar-mobile-main"),
            A();
        });
    },
    d = function() {
      $(document).on("click", ".sidebar-main-hide", function(A) {
        A.preventDefault(), $("body").toggleClass("sidebar-main-hidden");
      });
    },
    f = function() {
      $(document).on("click", ".sidebar-secondary-toggle", function(A) {
        A.preventDefault(), $("body").toggleClass("sidebar-secondary-hidden");
      });
    },
    g = function() {
      $(document).on("click", ".sidebar-right-main-toggle", function(A) {
        A.preventDefault(),
          $("body").toggleClass("sidebar-right-visible"),
          $("body").hasClass("sidebar-right-visible")
            ? ($("body").addClass("sidebar-xs"),
              $(".sidebar-main .nav-sidebar")
                .children(".nav-item")
                .children(".nav-group-sub")
                .css("display", ""))
            : $("body").removeClass("sidebar-xs");
      });
    },
    h = function() {
      $(document).on("click", ".sidebar-right-main-hide", function(A) {
        A.preventDefault(),
          $("body").toggleClass("sidebar-right-visible"),
          $("body").hasClass("sidebar-right-visible")
            ? $("body").addClass("sidebar-main-hidden")
            : $("body").removeClass("sidebar-main-hidden");
      });
    },
    i = function() {
      $(document).on("click", ".sidebar-right-toggle", function(A) {
        A.preventDefault(), $("body").toggleClass("sidebar-right-visible");
      });
    },
    j = function() {
      $(document).on("click", ".sidebar-right-secondary-toggle", function(A) {
        A.preventDefault(),
          $("body").toggleClass("sidebar-right-visible"),
          $("body").hasClass("sidebar-right-visible")
            ? $("body").addClass("sidebar-secondary-hidden")
            : $("body").removeClass("sidebar-secondary-hidden");
      });
    },
    k = function() {
      $(document).on("click", ".sidebar-component-toggle", function(A) {
        A.preventDefault(), $("body").toggleClass("sidebar-component-hidden");
      });
    },
    l = function() {
      $(".sidebar-mobile-expand").on("click", function(A) {
        A.preventDefault();
        var B = $(this).parents(".sidebar"),
          C = "sidebar-fullscreen";
        B.hasClass(C) ? B.removeClass(C) : B.addClass(C);
      });
    },
    m = function() {
      $(".sidebar-mobile-main-toggle").on("click", function(A) {
        A.preventDefault(),
          $("body")
            .toggleClass("sidebar-mobile-main")
            .removeClass("sidebar-mobile-secondary sidebar-mobile-right"),
          $(".sidebar-main").hasClass("sidebar-fullscreen") &&
            $(".sidebar-main").removeClass("sidebar-fullscreen");
      });
    },
    n = function() {
      $(".sidebar-mobile-secondary-toggle").on("click", function(A) {
        A.preventDefault(),
          $("body")
            .toggleClass("sidebar-mobile-secondary")
            .removeClass("sidebar-mobile-main sidebar-mobile-right"),
          $(".sidebar-secondary").hasClass("sidebar-fullscreen") &&
            $(".sidebar-secondary").removeClass("sidebar-fullscreen");
      });
    },
    o = function() {
      $(".sidebar-mobile-right-toggle").on("click", function(A) {
        A.preventDefault(),
          $("body")
            .toggleClass("sidebar-mobile-right")
            .removeClass("sidebar-mobile-main sidebar-mobile-secondary"),
          $(".sidebar-right").hasClass("sidebar-fullscreen") &&
            $(".sidebar-right").removeClass("sidebar-fullscreen");
      });
    },
    p = function() {
      $(".sidebar-mobile-component-toggle").on("click", function(A) {
        A.preventDefault(), $("body").toggleClass("sidebar-mobile-component");
      });
    },
    q = function() {
      var A = "nav-sidebar",
        B = "nav-item",
        C = "nav-item-open",
        D = "nav-link",
        E = "nav-group-sub",
        F = 250;
      $("." + A).each(function() {
        $(this)
          .find("." + B)
          .has("." + E)
          .children("." + B + " > ." + D)
          .not(".disabled")
          .on("click", function(G) {
            G.preventDefault();
            var H = $(this),
              I = $(".sidebar-xs")
                .not(".sidebar-mobile-main")
                .find(".sidebar-main ." + A)
                .children("." + B);
            H.parent("." + B).hasClass(C)
              ? H.parent("." + B)
                  .not(I)
                  .removeClass(C)
                  .children("." + E)
                  .slideUp(F)
              : H.parent("." + B)
                  .not(I)
                  .addClass(C)
                  .children("." + E)
                  .slideDown(F),
              "accordion" == H.parents("." + A).data("nav-type") &&
                H.parent("." + B)
                  .not(I)
                  .siblings(":has(." + E + ")")
                  .removeClass(C)
                  .children("." + E)
                  .slideUp(F);
          });
      }),
        $(document).on("click", "." + A + " .disabled", function(G) {
          G.preventDefault();
        }),
        $(".nav-scrollspy")
          .find("." + B)
          .has("." + E)
          .children("." + B + " > ." + D)
          .off("click");
    },
    r = function() {
      $(document).on("click", ".dropdown-content", function(A) {
        A.stopPropagation();
      }),
        $(".navbar-nav .disabled a, .nav-item-levels .disabled").on(
          "click",
          function(A) {
            A.preventDefault(), A.stopPropagation();
          }
        ),
        $('.dropdown-content a[data-toggle="tab"]').on("click", function() {
          $(this).tab("show");
        });
    },
    s = function() {
      $('[data-popup="tooltip"]').tooltip();
      var A = '[data-popup="tooltip-demo"]';
      $(A).is(":visible") &&
        ($(A).tooltip("show"),
        setTimeout(function() {
          $(A).tooltip("hide");
        }, 2e3));
    },
    t = function() {
      $('[data-popup="popover"]').popover();
    },
    u = function() {
      $(".card [data-action=reload]:not(.disabled)").on("click", function(A) {
        A.preventDefault();
        var B = $(this),
          C = B.closest(".card");
        $(C).block({
          message: '<i class="icon-spinner2 spinner"></i>',
          overlayCSS: {
            backgroundColor: "#fff",
            opacity: 0.8,
            cursor: "wait",
            "box-shadow": "0 0 0 1px #ddd"
          },
          css: { border: 0, padding: 0, backgroundColor: "none" }
        }),
          window.setTimeout(function() {
            $(C).unblock();
          }, 2e3);
      });
    },
    v = function() {
      var A = $(".card-collapsed");
      A.children(".card-header")
        .nextAll()
        .hide(),
        A.find("[data-action=collapse]").addClass("rotate-180"),
        $(".card [data-action=collapse]:not(.disabled)").on("click", function(
          B
        ) {
          var C = $(this);
          B.preventDefault(),
            C.parents(".card").toggleClass("card-collapsed"),
            C.toggleClass("rotate-180"),
            C.closest(".card")
              .children(".card-header")
              .nextAll()
              .slideToggle(150);
        });
    },
    w = function() {
      $(".card [data-action=remove]").on("click", function(A) {
        A.preventDefault();
        var B = $(this);
        B.hasClass("disabled") ||
          B.closest(".card").slideUp({
            duration: 150,
            start: function() {
              B.addClass("d-block");
            },
            complete: function() {
              B.remove();
            }
          });
      });
    },
    x = function() {
      $(".card [data-action=fullscreen]").on("click", function(A) {
        A.preventDefault();
        var B = $(this),
          C = B.closest(".card"),
          D = "overflow-hidden",
          E = "collapsed-in-fullscreen",
          F = "data-fullscreen";
        C.toggleClass("fixed-top h-100 rounded-0"),
          C.hasClass("fixed-top")
            ? (B.attr(F, "active"),
              C.removeAttr("style")
                .children(".collapse:not(.show)")
                .addClass("show " + E),
              $("body").addClass(D),
              B.siblings(
                "[data-action=move], [data-action=remove], [data-action=collapse]"
              ).addClass("d-none"))
            : (B.removeAttr(F),
              C.children("." + E).removeClass("show"),
              $("body").removeClass(D),
              B.siblings(
                "[data-action=move], [data-action=remove], [data-action=collapse]"
              ).removeClass("d-none"));
      });
    },
    y = function() {
      $(".dropdown-menu")
        .find(".dropdown-submenu")
        .not(".disabled")
        .find(".dropdown-toggle")
        .on("click", function(A) {
          A.stopPropagation(),
            A.preventDefault(),
            $(this)
              .parent()
              .siblings()
              .removeClass("show")
              .find(".show")
              .removeClass("show"),
            $(this)
              .parent()
              .toggleClass("show")
              .children(".dropdown-menu")
              .toggleClass("show"),
            $(this)
              .parents(".show")
              .on("hidden.bs.dropdown", function() {
                $(
                  ".dropdown-submenu .show, .dropdown-submenu.show"
                ).removeClass("show");
              });
        });
    },
    z = function() {
      $(".header-elements-toggle").on("click", function(A) {
        A.preventDefault(),
          $(this)
            .parents("[class*=header-elements-]")
            .find(".header-elements")
            .toggleClass("d-none");
      }),
        $(".footer-elements-toggle").on("click", function(A) {
          A.preventDefault(),
            $(this)
              .parents(".card-footer")
              .find(".footer-elements")
              .toggleClass("d-none");
        });
    };
  return {
    initBeforeLoad: function() {
      a();
    },
    initAfterLoad: function() {
      b();
    },
    initSidebars: function() {
      c(), d(), f(), g(), h(), i(), j(), k(), l(), m(), n(), o(), p();
    },
    initNavigations: function() {
      q(), r();
    },
    initComponents: function() {
      s(), t();
    },
    initCardActions: function() {
      u(), v(), w(), x();
    },
    initDropdownSubmenu: function() {
      y();
    },
    initHeaderElementsToggle: function() {
      z();
    },
    initCore: function() {
      App.initSidebars(),
        App.initNavigations(),
        App.initComponents(),
        App.initCardActions(),
        App.initDropdownSubmenu(),
        App.initHeaderElementsToggle();
    }
  };
})();
document.addEventListener("DOMContentLoaded", function() {
  App.initBeforeLoad(), App.initCore();
}),
  window.addEventListener("load", function() {
    App.initAfterLoad();
  });
